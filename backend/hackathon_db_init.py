from neo4j import GraphDatabase
import pandas as pd

def create_unique(session, label, value, recipeName, relationship):
    
    result = session.run("MATCH (node:" + label + ") where node.name = '" + value + "' return node")
    flag = True

    for t in result:

        flag = False
        break

    if flag:

        session.run("CREATE (n:" + label + " { name: '"+ value +"'})")
                    
    session.run("MATCH (recipe: Recipe), (c:" + label + ") WHERE recipe.name = '" + recipeName +"' AND c.name = '" + value + "' CREATE (recipe)-[r:" + relationship + "]->(c)")

def init_db():

    db_host = "bolt://localhost:7687"
    db_username = "neo4j"
    db_password = "root"
    df = pd.read_pickle('yummly_clean.pkl')
    df = df.dropna()
    rows = df.shape[0]
    driver = GraphDatabase.driver(db_host, auth=(db_username, db_password))

    with driver.session() as session:
        
        for i in range(rows):

            row = df.iloc[[i]]
            url = 'https://www.yummly.com/recipe/' + row['id'].values[0]
            recipeName = row['recipeName'].values[0].replace("'","")
            
            session.run("CREATE (recipe:Recipe {name: '"+ recipeName +"', url: '"+ url +"', rating:'"+ str(row['rating'].values[0]) +"', totalTimeInSeconds: '"+ str(row['totalTimeInSeconds'].values[0]) +"'})")
            courses = row['course'].values[0].replace('[', '').replace(']', '').split(', ')
            
            for course in courses:
                
                create_unique(session, 'Course', course, recipeName, 'IS_A')
                
            create_unique(session, 'Cuisine', row['cuisine'].values[0], recipeName, 'BELONGS_TO')
            
            for ingredient in row['clean ingredients'].values[0]:
                
                create_unique(session, 'Ingredient', ingredient, recipeName, 'CONTAINS')
            
    driver.close()

init_db()
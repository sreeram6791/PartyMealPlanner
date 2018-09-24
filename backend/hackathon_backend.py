from py2neo import Graph
from flask import *
import ast

app = Flask(__name__)

def isAllReady(menu, limit):
    
    courses = ["Appetizers","Salads","Side Dishes","Main Dishes","Lunch and Snacks","Breakfast and Brunch","Beverages","Condiments and Sauces","Afternoon Tea","Desserts","Breads","Soups","Cocktails"]
    r = []
    
    for c in courses:
        
        if c not in menu or len(menu[c]) < limit:
            
            return False
        
    return True

@app.route("/get_menu", methods=['POST'])
def get_menu():
    
    data = ast.literal_eval(request.data.decode('utf-8'))
    likes = data['likes']
    dislikes = data['dislikes']
    db_host = "localhost"
    db_port = 7687
    db_username = "neo4j"
    db_password = "root"
    session = Graph(username = db_username, password = db_password, host = db_host, port = db_port)
    limit = 5
    menu = {}
    final_result = []
    
    for like in likes:
        
        query = 'MATCH (rec:Recipe) -[r:BELONGS_TO]-> (c:Cuisine), (rec) -[r2:CONTAINS]-> (i:Ingredient) WHERE c.name = "' + like + '" AND NOT i.name IN ' + str(dislikes) + 'return rec.name, rec.rating'
        current_result = list(set([(t['rec.name'], t['rec.rating']) for t in session.run(query)]))
        current_result.sort(key=lambda elem: elem[1], reverse = True)
        final_result += [x[0] for x in current_result]
    
    for r in final_result:
        
        if isAllReady(menu, limit):
            
            return jsonify(menu)
        
        query = 'MATCH (rec:Recipe) -[r:IS_A]-> (c: Course) return c.name'
        result = session.run(query)
        
        for t in result:
            
            if t['c.name'] not in menu:
                
                menu[t['c.name']] = [r]
                break
                
            elif len(menu[t['c.name']]) < limit:
                
                menu[t['c.name']].append(r)
                break
    print(menu)
    return jsonify(menu)

if __name__ == "__main__":
    
    app.run(host= '0.0.0.0', port=80)
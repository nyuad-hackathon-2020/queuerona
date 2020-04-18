from flask import Flask, request, jsonify, render_template

app=Flask(__name__)

capacity={"1":10, "2":20, "3":5}
available_ticket={"1":[10,9,7], "2":[5,16,7], "3":[1,2,3]}
infection = [0,0,0]
names = ["Carrefour Market", "Life Pharmacy", "Splash Fashions"]
logos = ["logo1.png", "logo2.png", "logo3.png"]
location = ["Mall Of The Emirates", "Marina Mall, Abu Dhabi", "Dubai Mall"]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/capacity/<string:business_name>", methods=["GET","POST"])
def business_capacity(business_name):
    '''
        GET: {"cpacity": number}
        POST: {"capacity": number}
    '''
    if request.method == "GET":
        return jsonify({
            "capacity": capacity[business_name]
        })
    elif request.method == "POST":
        content = request.json
        if business_name not in businesses_capacity:
            businesses_capacity[business_name] = content["capacity"]
    return 'success'


@app.route("/api/available_tickets/<string:business_name>")
def available_tickets(business_name):
    '''
        GET: {
            "10-12": number,
            "12-2": number,
            "2-4": number
            }
    '''
    return jsonify({
        "10-12": available_ticket[business_name][0],
        "12-2": available_ticket[business_name][1],
        "2-4": available_ticket[business_name][2]
    })

@app.route("/api/reserve_ticket/<string:business_name>", methods=["POST"])
def reserve_ticket(business_name):
    '''
        POST: {"reserve_ticket": number}
        number = 1 -> "10-12"
               = 2 -> "12-2"
               = 3 -> "2-4" 
    '''
    content = request.json
    if business_name in available_ticket:
        available_ticket[business_name][content["reserve_ticket"]-1] -= 1
    return "success"

@app.route("/api/warning/<string:business_name>", methods=["POST"])
def warning(business_name):
    '''
        POST: {"warning": 1}
    '''
    content = request.json
    if business_name in available_ticket:
        infection[business_name]=1
    return "success"

@app.route("/business/<int:id>")
def business(id):
    name = names[id-1]
    logo = logos[id-1]
    c = capacity[str(id)]
    at = available_ticket[str(id)]
    customers = [c-at[0], c-at[1], c-at[2]]
    return render_template("/dashboard/index.html",
        customers=customers, name=name, logo=logo, id=str(id), location=location[id-1])

if __name__ == '__main__':
    app.debug = True
    app.run()
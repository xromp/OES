from flask import Flask, jsonify, abort, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from datetime import date
import pymysql.cursors

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
conn =  pymysql.connect(host='localhost',
  user='admin',
  password='admin',
  db='oes',
  charset='utf8mb4',
  cursorclass=pymysql.cursors.DictCursor)

@app.route('/user/', methods = ['POST','GET'])
@cross_origin()
def user():
  if request.method == 'POST':
    data = request.json
    lname = data['lname']
    fname = data['fname']
    mname = data['mname']
    datestarteffectivity = date.today()
    dateendeffectivity = date.today()
    active = True
    try:
      with conn.cursor() as cursor:
        sql = "INSERT INTO person00(lname,fname,mname,datestarteffectivity,dateendeffectivity,active) VALUES ('{}','{}','{}','{}','{}',{})"
        cursor.execute(sql.format(lname,fname,mname,datestarteffectivity,dateendeffectivity,active))
    finally:
      conn.commit()
    return jsonify(
      status = 'success',
      data = {'data': data}
      )
  elif request.method == 'GET':
    data = request.json
    with conn.cursor() as cursor:
      sql = "SELECT * FROM person00"
      cursor.execute(sql)
    return jsonify(
      status = 'success',
      data = cursor.fetchall())

  else:
    return "error"


if __name__ == '__main__':
  app.run(host='localhost',port=8001,debug = True)
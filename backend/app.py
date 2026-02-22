from flask import Flask, request, jsonify
import json

app = Flask(**name**)

# load schemes

with open("schemes.json") as f:
schemes = json.load(f)

@app.route("/get-schemes", methods=["POST"])
def get_schemes():
data = request.json
user_input = data.get("message", "").lower()

```
results = []

for scheme in schemes:
    if scheme["eligibility"] in user_input:
        results.append(scheme)

if not results:
    return jsonify({"reply": "No matching schemes found."})

return jsonify({"schemes": results})
```

if **name** == "**main**":
app.run(debug=True)

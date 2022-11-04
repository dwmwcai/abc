# olap
```

CREATE table Inventory(Inventory_id int PRIMARY KEY NOT NULL,
   Inventory_name varchar(60) NOT NULL,
   Inventory_catogory varchar(255) NOT NULL,
   brand_name varchar(255) NOT NULL,
   supplier_name varchar(255) NOT NULL,
   Inventory_price int NOT NULL);
insert into Inventory values(1, 'BOMBAY', 'FIRST', 'TEA', 'AYAN', 10);
insert into Inventory values(2, 'NEW-YORK', 'SECOND', 'COFFEE', 'RIHAN', 20);
insert into Inventory values(3, 'LONDON', 'THIRD', 'DRUGS', 'ASFHAN', 30);
insert into Inventory values(4, 'SHANGHAI', 'FOURTH', 'MILK', 'HASNAIN', 40);

CREATE table Location(loc_id int PRIMARY KEY NOT NULL,
  street varchar(60) NOT NULL,
  city varchar(255) NOT NULL,
  state varchar(255) NOT NULL,
  country varchar(255) NOT NULL);
insert into Location values(201, 'FORT', 'MUMBAI', 'MAHARASHTRA', 'INDIA');
insert into Location values(202, 'WALL ST', 'NY', 'NYS', 'USA');
insert into Location values(203, 'PATERNOSTERSQ', 'LONDON', 'ENGLAND', 'UK');
insert into Location values(204, 'SOUTH ROAD', 'SHANGHAI', 'ZHUYUAN', 'CHINA');

CREATE table Orders(order_id int PRIMARY KEY NOT NULL,
date_required DATE NOT NULL,
date_completed DATE NOT NULL,
no_of_orders int NOT NULL,
time_req_for_orders varchar(200) NOT NULL);
insert into Orders values(301, '2021-1-17', '2021-2-14', 1000, '1-MONTH');
insert into Orders values(302, '2021-2-14', '2021-5-21', 2000, '3-MONTH');
insert into Orders values(303, '2021-5-21', '2021-6-26', 3000, '1-MONTH');
insert into Orders values(304, '2021-6-26', '2021-1-17', 4000, '7-MONTH');

CREATE table Time(time_id int PRIMARY KEY NOT NULL,
  day DATE NOT NULL,
  month varchar(255) NOT NULL,
  qt varchar(255) NOT NULL,
  year varchar(255) NOT NULL);
insert into Time values(101, '2021-1-17', 'JANUARY', 'Q1', 2021);
insert into Time values(102, '2021-2-14', 'FEBRUARY', 'Q1', 2021);
insert into Time values(103, '2021-5-21', 'MAY', 'Q2', 2021);
insert into Time values(104, '2021-6-26', 'JUNE', 'Q2', 2021);

create table FACT_TABLE(Inventory_id int REFERENCES Inventory(Inventory_id),
time_id int REFERENCES Time(time_id),
loc_id int REFERENCES Location(loc_id),
order_id int REFERENCES Orders(order_id),
no_of_investor int NOT NULL,
total_order int NOT NULL);
insert into FACT_TABLE values(1, 101, 201, 301, 40, 9000);
insert into FACT_TABLE values(1, 102, 201, 302, 40, 7000);
insert into FACT_TABLE values(1, 103, 201, 303, 40, 8000);
insert into FACT_TABLE values(1, 104, 201, 304, 40, 7000);

SELECT * FROM Inventory;
SELECT * FROM Orders;
SELECT * FROM Location;
SELECT * FROM Time;
SELECT * FROM FACT_TABLE;


SELECT Inventory_name, no_of_investor, day
FROM((FACT_TABLE INNER JOIN Inventory on FACT_TABLE.Inventory_id=Inventory.Inventory_id)
 JOIN Time on FACT_TABLE.time_id=Time.time_id)
WHERE brand_name = 'TEA';

SELECT Inventory_name, FACT_TABLE.no_of_investor
FROM((Inventory INNER JOIN FACT_TABLE on Inventory.Inventory_id=FACT_TABLE.Inventory_id)
 JOIN Time on FACT_TABLE.time_id=Time.time_id)
WHERE Inventory_name = 'BOMBAY' and qt = 'Q1';

SELECT year, SUM(no_of_investor)
FROM(FACT_TABLE NATURAL JOIN Inventory)
JOIN Time on FACT_TABLE.time_id = Time.time_id
WHERE Inventory_name = 'BOMBAY' GROUP BY year;

SELECT qt, SUM(no_of_investor)
FROM(FACT_TABLE NATURAL JOIN Inventory)
JOIN Time on FACT_TABLE.time_id = Time.time_id
WHERE Inventory_name = 'BOMBAY' GROUP BY qt;

```

# naive
```
from sklearn.naive_bayes import GaussianNB
from sklearn import preprocessing
weather = ['Sunny', 'Sunny', 'Overcast', 'Rainy', 'Rainy', 'Rainy',
           'Overcast', 'Sunny', 'Sunny', 'Rainy', 'Sunny', 'Overcast', 'Overcast', 'Rainy']
temp = ['Hot', 'Hot', 'Hot', 'Mild', 'Cool', 'Cool', 'Cool',
        'Mild', 'Cool', 'Mild', 'Mild', 'Mild', 'Hot', 'Mild']
play = ['No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'Yes',
        'No', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'No']

le = preprocessing.LabelEncoder()
weather_encoded = le.fit_transform(weather)
print("Weather Encoded:", weather_encoded)

temp_encoded = le.fit_transform(temp)
label = le.fit_transform(play)
print("Temp:", temp_encoded)
print("Play:", label)

features = [tup for tup in zip(weather_encoded, temp_encoded)]
print("Features: ", features)
model = GaussianNB()
model.fit(features, label)
predicted = model.predict([[0, 2]])
print("Predicted Value:", predicted)

```

# page
```
import networkx as nx
import numpy as np
from numpy import array
import matplotlib.pyplot as plt
with open('hits.txt') as f:
    lines = f.readlines()

G = nx.DiGraph()

for line in lines:
    t = tuple(line.strip().split(','))
    G.add_edge(*t)

h, a = nx.hits(G, max_iter=100)
h = dict(sorted(h.items(), key=lambda x: x[0]))
a = dict(sorted(a.items(), key=lambda x: x[0]))

print(np.round(list(a.values()), 3))
print(np.round(list(h.values()), 3))

pr = nx.pagerank(G)
pr = dict(sorted(pr.items(), key=lambda x: x[0]))
print(np.round(list(pr.values()), 3))

sim = nx.simrank_similarity(G)
lol = [[sim[u][v] for v in sorted(sim[u])] for u in sorted(sim)]
sim_array = np.round(array(lol), 3)
print(sim_array)

nx.draw(G, with_labels=True, node_size=2000, edge_color='#eb4034', width=3, font_size=16, font_weight=500, arrowsize=20, alpha=0.8)
plt.savefig("graph.png")
1,4
2,3
2,5
3,1
4,2
4,3
5,3
5,2
5,4
5,6
6,3
6,8
7,1
7,3
8,1

```

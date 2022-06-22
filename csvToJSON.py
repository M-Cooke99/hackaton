import os
from os import path
import pandas as pd

location = os.path.abspath("RestaurantData.csv")
df = pd.read_csv(location)
df.to_json(path_or_buf=("Output.json"), orient="index")

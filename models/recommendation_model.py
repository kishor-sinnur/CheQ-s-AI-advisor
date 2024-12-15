import numpy as np
import pickle

# Mock training
recommendation_model = {"example_feature": "example_value"}
with open("recommendation_model.pkl", "wb") as f:
    pickle.dump(recommendation_model, f)

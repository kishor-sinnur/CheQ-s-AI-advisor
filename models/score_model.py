import numpy as np
from sklearn.linear_model import LinearRegression

# Mock data
X = np.random.rand(100, 2)
y = X[:, 0] * 500 + X[:, 1] * 250

# Train model
model = LinearRegression().fit(X, y)
print("Score Model Trained!")
# Define a function to train the model

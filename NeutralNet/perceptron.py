import numpy as np;

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)


training_inputs = np.array([[0,0,1],[1,1,1],[1,0,1],[0,1,1]])

training_outputs = np.array([[0,1,1,0]]).T

np.random.seed(1)

synaptic_wieghts = 2 * np.random.random((3,1)) - 1

print('Random starting syncaptic weights: ')
print(synaptic_wieghts)

for iteration in range(2000):
    
    input_layer = training_inputs
    outputs = sigmoid(np.dot(input_layer, synaptic_wieghts))

    error = training_outputs - outputs

    adjustment = error * sigmoid_derivative(outputs)

    synaptic_wieghts += np.dot(input_layer.T, adjustment)

print('Synaptic weights after training: ')
print(synaptic_wieghts)
print('Outputs after training: ')
print(outputs)

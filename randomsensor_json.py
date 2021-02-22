import random
import time
import json

def main():
    with open('sensordata.json', 'w') as json_file:
        sensor_data = []
        for i in range(1, 20):
            s = {
                'sensorsid': i,
                'sensorsname': 'senors' + str(i),
            }


if __name__ == '__main__':
    main()
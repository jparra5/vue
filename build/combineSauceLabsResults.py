import os
import xml.etree.ElementTree as ET

saucelabsResults = open('saucelabsResults.xml', 'w')
saucelabsResults.write('<?xml version="1.0"?>\n')
saucelabsResults.write('<testsuites>\n')


for dirname, dirnames, filenames in os.walk('./build'):
    # print path to all filenames.
    for filename in filenames:
        if filename.startswith('TEST'):
            file = os.path.join(dirname, filename)
            
            print(file)
            
            with open(file) as f:
                for _ in xrange(1):
                    next(f)
                for line in f:
                    saucelabsResults.write(line)
            
            saucelabsResults.write('\n')

saucelabsResults.write('</testsuites>\n')
saucelabsResults.close()
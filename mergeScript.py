from PyPDF2 import PdfMerger
from datetime import datetime
import sys
import json
data = sys.stdin.read()
print(data)
files = json.loads(data)




merger = PdfMerger()
try:
    f1 = open(files[0],'rb')
    merger.append(f1)
    merger.append(files[1])
    filename = datetime.now().strftime("%Y-%m-%d_%H-%M-%S") + "merged.pdf"
    merger.write('public/mergepdfs/'+filename)
# print('done')
    merger.close()
# print (filename)
    print('mergepdfs/'+filename)

except Exception:
    print(Exception)





import os
directory = 'photos/'
counter = 0
for filename in os.listdir(directory):

    old_path = os.path.join(directory,filename)
    new_path = os.path.join(directory,"photo"+str(counter)+".jpg")
    try:
        os.rename(old_path,new_path)
    except:pass
    counter = counter+1

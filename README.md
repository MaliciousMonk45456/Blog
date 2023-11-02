# Blog

## A blog app using react native and jsonserver which is a convenient RESTful API simulator and ngrok which allows users to expose local development servers to the internet. The app allows users to add, delete and edit blog posts and view them.

### To view the application locally we need either physical device or we can use an emulator

#### For physical device

1. Install the expo app on your physical device

#### For emulator

HyperV should be enabled on your computer in the BIOS.

1. Install android studio on your computer
3. Create a virtual device and then press on run.

#### To run the application

1. First install all required dependencies in both main folder and in jsonserver
```
npm i 
```
2. Then run your emulator or the expo app on your physical device

3. Then install ngrok from web and set path of ngrok.exe in your Path environment variable

4. Now run this command in jsonserver folder
```
npm run db
```

5. Now run in command prompt
```
ngrok http 3000
```

6. Change the link we get from previous command in jsonServer.js inside api inside src 

7. Then run
```
npx expo start
```

8. Scan the QR code if using physical device or press a to automatically start expo app on emulator

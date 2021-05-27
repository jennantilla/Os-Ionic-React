## Ionic React Android App (with Capacitor)

This is a simple Ionic React Android app that illustrates how to integrate the OneSignal SDK.

Running on Cordova ```onesignal-cordova-plugin 3.0.0-beta1``` release.

### Running this example

To run the provided example:

```ionic run android```

#### Getting Started with a new Android app - Cheat Sheet

1. Create a simple Ionic app through command line.
```ionic start```

2. Choose your framework. This project uses React which comes with Capacitor.
```ionic capacitor add android```

3. Add Android app
```ionic capacitor add android```

4. Install onesignal cordova plugin inside project
```npm install onesignal-cordova-plugin```
```npx cap sync```

6. Add [intialization code](https://documentation.onesignal.com/docs/ionic-sdk-setup#android-requirements) to the App.tsx file (note that this example app has upgraded from Cordova 2.x.x to 3.x.x and temporarily needs to use ```(window as any).plugins.OneSignal.setAppId(YOUR_APP_ID)```). More context [here](https://github.com/OneSignal/OneSignal-Cordova-SDK/issues/700#issuecomment-842788403).

5. Open project in Android Studio
```ionic capacitor build android```

7. Run app and register user!

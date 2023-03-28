import React, { useEffect, useState, useCallback } from "react";

import { Unity, useUnityContext } from "react-unity-webgl";

export const AppUnity = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Unity/Build/Engine.loader.js",
    dataUrl: "Unity/Build/Engine.data.unityweb",
    frameworkUrl: "Unity/Build/Engine.framework.js.unityweb",
    codeUrl: "Unity/Build/Engine.wasm.unityweb",
  });

  
  // We'll use a state to store the device pixel ratio.
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  const handleChangePixelRatio = useCallback(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: 800, height: 600 }}
      devicePixelRatio={devicePixelRatio}
    />
  );

  return <Unity unityProvider={unityProvider} />;
}
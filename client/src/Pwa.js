import React from "react";

export default function Pwa() {
  let deferrPromt;

  const installPwa = () => {
    if (deferrPromt) {
      deferrPromt.prompt();
      deferrPromt.userChoice.then((choice) => {
        console.log(choice);
        if (choice.outcome === "dismissed") {
          console.log("install was cancelled");
        } else {
          console.log("user add to homeScreen");
        }
      });
    }
    deferrPromt = null;
  };
  return <></>;
}

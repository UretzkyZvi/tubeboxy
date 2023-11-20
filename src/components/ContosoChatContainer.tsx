import {
  AzureCommunicationTokenCredential,
  CommunicationUserIdentifier,
} from "@azure/communication-common";
import {
  ChatComposite,
  CompositeLocale,
  fromFlatCommunicationIdentifier,
  useAzureCommunicationChatAdapter,
} from "@azure/communication-react";
import { tr } from "@faker-js/faker";
import { PartialTheme, Theme } from "@fluentui/react";
import React, { useMemo, useEffect, useState, FC } from "react";

export type ContosoChatContainerProps = {
  userIdentifier: string;
  token: string;
  displayName: string;
  endpointUrl: string;
  threadId: string;
  fluentTheme?: PartialTheme | Theme;
  errorBar?: boolean;
  participants?: boolean;
  topic?: boolean;
  locale?: CompositeLocale;
  formFactor?: "desktop" | "mobile";
};

const ContosoChatContainer: FC<ContosoChatContainerProps> = ({
  userIdentifier,
  token,
  displayName,
  endpointUrl,
  threadId,
  fluentTheme,
  errorBar,
  participants,
  topic,
  locale,
  formFactor,
}): JSX.Element => {
  const credential = useMemo(() => {
    try {
      // console.log("ContosoChatContainer", {
      //   userId,
      //   displayName,
      //   credential,
      //   endpointUrl,
      //   threadId,
      //   fluentTheme,
      //   errorBar,
      //   participants,
      //   topic,
      //   locale,
      //   formFactor,
      // });
      return new AzureCommunicationTokenCredential(token);
    } catch (error) {
      console.error("Failed to construct token credential:", error);
      return undefined;
    }
  }, [token]);

  const userId = useMemo(
    () =>
      fromFlatCommunicationIdentifier(
        userIdentifier,
      ) as CommunicationUserIdentifier,
    [userIdentifier],
  );



  const adapter = useAzureCommunicationChatAdapter({
    endpoint: endpointUrl,
    userId,
    displayName,
    credential,
    threadId: threadId,
  });

  if (credential === undefined) {
    return <>Failed to construct credential. Provided token is malformed.</>;
  }

  if (!adapter) {
    return <>Initializing...</>;
  }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ChatComposite
        adapter={adapter}
      
        fluentTheme={fluentTheme}
        options={{
          errorBar: errorBar,
          topic: topic,
          autoFocus: "sendBoxTextField",
        }}
        locale={locale}
      />
    </div>
  );
};

export default ContosoChatContainer;

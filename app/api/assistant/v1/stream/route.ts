import { assistantKeys, AssistantKeysProps, NEXT_ASSISTANT_API } from "docs-chat-assistant/api"

const keyVals: AssistantKeysProps = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
    OPENAI_ASSISTANT_ID: process.env.OPENAI_ASSISTANT_ID!,
    OPENAI_VECTORSTORE_ID: process.env.OPENAI_VECTORSTORE_ID!
}
assistantKeys.setKeys(keyVals);

export { NEXT_ASSISTANT_API as POST }
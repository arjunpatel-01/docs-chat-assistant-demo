const pageReadmeMap: string[] = [];

pageReadmeMap.push(`
# Docs Chat Assistant
Documentation Chat Assistant component for \`Next.js\` using [Material UI (MUI)](https://mui.com/material-ui) for component design and [OpenAI API](https://platform.openai.com/docs/api-reference/introduction) for AI Assistant integration and vector store.

`);

pageReadmeMap.push(`
## Contents
- Tech Stack
    - Material UI (MUI)
    - Markdown Response Styling
    - HTML Parse
- Usage
    - Installation
    - Setup
    - OpenAI Tools
    - Environment variables
    - Front-end
    - Backend
        - Assistant API
        - Web Crawler API
- Styling
    - Assistant Props
    - FabProps
    - ModalProps
    - Example
- Limitations

`);

pageReadmeMap.push(`
## Tech Stack
#### Material UI (MUI)
- [\`Dialog\`](https://mui.com/material-ui/react-dialog/)
- [\`Floating Action Button\`](https://mui.com/material-ui/react-floating-action-button/)
- [\`Icon Button\`](https://mui.com/material-ui/api/icon-button/)
- [\`Icons\`](https://mui.com/material-ui/material-icons/)
- [\`Linear Progress\`](https://mui.com/material-ui/api/linear-progress/)

#### Markdown Response Styling
- [\`react-markdown\`](https://www.npmjs.com/package/react-markdown/v/8.0.6)
- [\`react-syntax-highlighter\`](https://www.npmjs.com/package/react-syntax-highlighter)

#### HTML Parse
- [\`Cheerio\`](https://cheerio.js.org/)

`)

pageReadmeMap.push(`
## Usage
### Installation
\`\`\`bash
npm install docs-chat-assistant
\`\`\`

`);

pageReadmeMap.push(
`### Setup
#### OpenAI tools
1. First create a vector store [here](https://platform.openai.com/storage/vector_stores).
    - Please note that this library only supports OpenAI vector stores at the moment.
2. At the bottom right of your created vector store, click \` + Create assistant \` to generate a new assistant.
3. Navigate to the [Assistants page](https://platform.openai.com/assistants/), select the newly generated assistant, and ensure that \`File search\` is enabled and the proper vector store is attached.
4. Optional: Provide thorough instructions to the assistant for best response outputs.
    - e.g., "You are a helpful chat assistant for \`'YOUR PRODUCT'\`. Only answer questions relating to \`'YOUR PRODUCT'\`, and use the attached vector store to retrieve sources."

`);

pageReadmeMap.push(
`#### Environment variables
Set your variables in a .env file.
\`\`\`bash
OPENAI_API_KEY="YOUR OPENAI API KEY"
OPENAI_ASSISTANT_ID="YOUR OPENAI ASSISTANT ID"
OPENAI_VECTORSTORE_ID="YOUR OPENAI VECTOR STORE ID"
\`\`\`

`);

pageReadmeMap.push(`
#### Front-end
Import the component and plug it into your \`Next.js\` app.
The component has 2 mandatory props: \`title\` and \`apiRoute\`. 

See **Styling** Section for more info on component props.

See **Backend** Section to set up API routes. 

`);

pageReadmeMap.push(`
Example:
\`\`\`javascript
import { OpenAIAssistant } from 'docs-chat-assistnant'

export default function Home() {
    return (
        <>
            {/* This is the component. It requires 2 props. */}
            <OpenAIAssistant
                title="Docs AI Assistant" //Replace with your title
                apiRoute="/api/assistant" //Replace with your API route. More on that in the backend section
            />

            {/*rest of your code*/}
        </>
    );
}
\`\`\`

`);

pageReadmeMap.push(`
#### Backend
First, set up \`Next.js\` directory structure for APIs. See [Next.js Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers).

Example directory:
\`\`\`bash
project
├── app
│   ├── api
│   │   ├── assistant
│   │   │   ├── route.js
│   │   ├── crawler
│   │   │   ├── route.js
├── page.jsx
├── layout.jsx
├── ...
\`\`\`

`);

pageReadmeMap.push(`
##### \`Assistant API\`: 
This method receives a \`Request\` containing a \`message\`, optional \`instructions\`, and an internally created \`thread_id\`. Calls are then made to OpenAI APIs to create (or add to) a message chain and to generate a stream response. The \`OpenAIAssistant\` component processes the API response and outputs the stream.

Usage:
\`\`\`javascript
// example path: api/assistant/route.js
import { assistantKeys, NEXT_ASSISTANT_API } from "docs-chat-assistant/api"

assistantKeys.setKeys({
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_ASSISTANT_ID: process.env.OPENAI_ASSISTANT_ID
});

export { NEXT_ASSISTANT_API as POST }
\`\`\`

`);

pageReadmeMap.push(`
##### \`Web Crawler API\`: 
This method receives an \`string\`containing a \`base_url\` to crawl. The host is extracted from the url, and the function iteratively retrieves all links from each page in a Breadth First Search manner. As the method visits each page, the contents are stored in files in a temporary directory. Finally, the files are uploaded to the vector store and the temporary directory is deleted. The function returns a Response with a \`status\` code and a \`JSON body\`.

\`parameters\` - \`base_url\`: string

\`returns\` - \`Response\` that contains \`status\`, and \`message\` | \`error_message\` as JSON body

**PLEASE NOTE THAT THIS METHOD SHOULD BE LOCKED BEHIND ADMIN PRIVILEDGES (AUTHENTICATION) BECAUSE IT DIRECTLY UPLOAD TO THE VECTOR STORE.**

`);

pageReadmeMap.push(`
Usage example:
\`\`\`javascript
//example path: api/crawler/route.js
import { assistantKeys, WEB_CRAWLER } from "docs-chat-assistant/api"

assistantKeys.setKeys({
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_VECTORSTORE_ID: process.env.OPENAI_VECTORSTORE_ID
});

export async function POST(request) {
    const body = await request.json();

  //ensure this is protected by admin priviledges

    const base_url = body.base_url;
    return await WEB_CRAWLER(base_url);
}
\`\`\`

`);

pageReadmeMap.push(`
## Styling
## \`Assistant Props\`
Props of the Assistant component.

`);

pageReadmeMap.push(`
| **Name** | **Type** | **Default** | **Description** |
| :-- | :-- | :-- | :-- |
| apiRoute | \`string\` | \`-\` | API route URL. |
| |  |  | **Required** |
| buttonLabel &nbsp; &nbsp; &nbsp; &nbsp; | \`string\` | \`'Ask AI'\` | The label on the FAB. |   
| color | \`string\` | \`'info'\` | The color of the component. Affects FAB, Textfield, and Icons. Supports MUI Button color strings, CSS Standard colors, hex values, and rgb values. |
| FabProps | \`FabProps\` | \`-\` | Props to modify the Floating Action Button element. |
| formLabel | \`string\` | \`'Ask me a question...'\` | The label in the TextField. |
| icon | \`React.JSX.Element\` | \`AutoAwesomeIcon\` | Insert React JSX Element to override default FAB icon. |
| iconSize | \`'small'\` &#124; \`'medium'\` &#124; \`'large'\` &nbsp; &nbsp; &nbsp; &nbsp; | \`'large'\` | The size of the FAB default icon. If icon prop is overridden, this prop will not affect React JSX Element size. |
| instructions | \`string\` | \`-\` | Additional instructions for OpenAI Assistant. |
| ModalProps | \`ModalProps\` | \`-\` | Props to modify the popup Modal element. |
| placeholder | \`string\` | \`-\` | The placeholder text before the user has sent the first message.Temporarily fills the space where the messages will be displayed and is replaced with message log once the first one is sent. |
| title | \`string\` | \`-\` | Title for the Modal. |
| |  |  | **Required** |

`);

pageReadmeMap.push(`
## \`FabProps\`
Props of the Floating Action Button.

`);

pageReadmeMap.push(`
| **Name** | **Type** | **Default** | **Description** |
| :-- | :-- | :-- | :-- |
| borderRadius &nbsp; &nbsp; &nbsp; &nbsp;| \`string\` &#124; \`number\` | If \`variant\` is \`'circular'\`, then \`-\`. | Border curvature of FAB. |
| |  | If \`variant\` is \`'extended'\`, then \`'.3rem'\`. | **Cannot be set if \`variant\` = \`'circular'\`.** |
| bottom | \`string\` &#124; \`number\` | \`35\` | Vertical spacing of FAB from the bottom edge. |
| fontSize | \`string\` &#124; \`number\` | \`.8rem\` | Font size of FAB text. |
| height | \`string\` &#124; \`number\` | \`73\` | Height of FAB. |
| right | \`string\` &#124; \`number\` | \`35\` | Horizontal spacing of FAB from the right edge. |
| variant | \`'circular'\` &#124; \`'extended'\` | \`'extended'\` | Shape variant of FAB. If set to \`'circular'\`, the \`borderRadius\` prop will be disabled. |
| width | \`string\` &#124; \`number\` | \`'73'\` | Width of FAB. |
| zIndex | \`(string & {})\` &#124; \`(number & {})\` | \`1\` | Z-order of FAB. |

`);

pageReadmeMap.push(`
### \`ModalProps\`
Props of the Modal element.

| **Name** | **Type** | **Default** &nbsp; &nbsp; &nbsp; &nbsp;  | **Description** |
| :-- | :-- | :-- | :-- |
| maxWidth | \`'sm\` &#124; \`'md'\` &#124; \`'lg'\` | \`'md'\` | Max Width of the Modal. Grows with size of the screen. |
| titleVariant &nbsp; &nbsp; &nbsp; &nbsp; | \`'body1'\` &#124; \`'body2'\` &#124; \`'caption'\` &#124; &nbsp; &nbsp; &nbsp; &nbsp; | \`'h5'\` | Applies MUI Typography variant theme to Modal title. |
|  | \`'h1'\` &#124; \`'h2'\` &#124; \`'h3'\` &#124; |  |  |
|  | \`'h4'\` &#124; \`'h5'\` &#124; \`'h6'\` &#124; |  |  |
|  | \`'subtitle1'\` &#124; \`'subtitle2'\` |  |  |
| zIndex | \`(string & {})\` &#124; \`(number & {})\` | \`'2'\` | Z-order of the Modal. |

`);

pageReadmeMap.push(`
### Example
This example uses all the available props.

`);

pageReadmeMap.push(`
\`\`\`javascript
import { OpenAIAssistant } from 'docs-chat-assistnant'
import SmartToyIcon from '@mui/icons-material/SmartToy';

export default function Home() {
    return (
        <>
            <OpenAIAssistant
                title="Docs AI Assistant" //required
                apiRoute="/api/assistant" //required
                buttonLabel="Docs AI"
                color="purple"
                FabProps={{
                    borderRadius: ".5rem",
                    bottom: 40,
                    fontSize: "0.7rem",
                    height: 70,
                    right: 40,
                    variant: "extended",
                    width: 70,
                    zIndex: 2
                }}
                formLabel="Ask me anything!!"
                icon={<SmartToyIcon />}
                iconSize="large"    //this won't have any effect
                instructions="You are a helpful chat assistant."
                ModalProps={{
                    maxWidth: "sm",
                    titleVariant: "h4",
                    zIndex: 3
                }}
                placeholder="Ask me any question, and I'll try my best to answer it for you!"
            />
        </>
    );
}
\`\`\`

`);

pageReadmeMap.push(`
## Limitations (05/2024)
From testing and through personal experience, here are some of the limitations I experienced with the OpenAI Assistant API.
- The Assistant is not optimized for RAG. This doesn't mean that it is impossible; however, it runs into rate limits much quicker than others (struggles to loop through vector store and sometimes uses its own knowledge to answer questions instead), and file searching is simply adequate.
    - For better results, I suggest using a gpt 3.5 model that supports file search. With this, I have experienced faster responses and less hallucinations (and more focused responses).
- OpenAI threads does not have a batch delete option. 
    - Why this is important: When making an API call to begin chatting, a new thread will be created. However, every time the page is refreshed and the same user begins chatting again, a new thread will be created. Eventually, the owner of the OpenAI account will have a large number of idle threads that may or may not do anything. This can be solved through authenticating the user, but for a documentation site like [docs.kapa.ai](https://docs.kapa.ai/), for example, it wouldn't make sense to have a authentication wall. So, having the option to batch delete means on page refresh, any old threads can be cleared. Another option is to store the threadIds in local storage to remove later, and that is currently the most appropriate solution, but there are also several limitations to that.

`);

pageReadmeMap.push(`
The following are limitations to this NPM package:
- Compatibility with other frameworks.
    - Currently, this package is only compatible with Next.js because it utilizes its seamless API capabilities.
    - Testing with Express has not gone well because the current API methods return a fetch API Response object. There is no easy conversion from one to the other, especially when dealing with ReadableStreams. There is a method called \`fromWeb()\` that may make the conversion simpler; however, it is labeled as experimental and should not be used in production level code.
- This package does not support other LLMs or Vector Stores.
- The Assistant API is not protected. While not technically a large issue since the concept is built around client-side interactions with your OpenAI Assistant, it could be abused if a user spams messages.
    - A great workaround is to set a rate limit on the frequency of API calls that can be made.
    - Another workaround is by implementing JWT/refresh tokens. however, the API doesn't include that out-of-the-box yet. This will likely be included in future versions.

`);

pageReadmeMap.push(`
## LICENSE
[MIT](https://github.com/arjunpatel-01/docs-chat-assistant?tab=MIT-1-ov-file)


### Contributions are welcome!!
`);

export { pageReadmeMap }
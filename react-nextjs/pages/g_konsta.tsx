// g_konsta
import {App, BlockTitle, List, ListItem, Navbar, Page} from "konsta/react";
import {Button} from "@mui/material";

export default function (){
    return (<>
        <App theme="material">
            <Page>
                <Navbar
                    title="List"
                />
                <BlockTitle>Links, Header, Footer</BlockTitle>
                <List strongIos outlineIos>
                    <ListItem
                        link
                        header={<Button variant='outlined'>HOLA MUI</Button>} //componenete de mui dentro de Konsta
                        title="John Doe"
                        after="Edit"
                    />
                </List>
            </Page>
        </App>
    </>)

}
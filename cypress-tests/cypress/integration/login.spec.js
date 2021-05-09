import { GhostPost } from "../page-objects/ghost-post";

describe('F5 - Gestor de Log In', () => {
    
    const ghost = new GhostPost()

    it('Should login successfuly', () => {
        ghost.login()
    })
    
})
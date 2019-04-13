export class Post {

    constructor(id: number, content: string, showMore: boolean){
        this.id = id;
        this.content = content;
    }

    id: number;
    content: string;
}
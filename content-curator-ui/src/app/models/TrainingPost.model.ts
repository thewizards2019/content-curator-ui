export class TrainingPost{
    constructor(id: number, content: string, showMore: boolean = null){
        this.id = id;
        this.content = content;
        this.showMore = showMore;
    }

    id: number;
    content: string;
    showMore: boolean;
}
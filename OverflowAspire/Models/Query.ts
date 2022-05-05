export class Query {
    QueryId: number=0;
    Title!: string;
    Content!: string;
    code: string="";
    IsSolved: boolean=false;

    constructor(){}
    
}

export class QueryComment{
        queryCommentId: number=0;
        comment: string="";
        datetime: string="";
        queryId: number=0;
        code: string="";
    
}
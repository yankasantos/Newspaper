export class ListPostTechnology{
    section: string;
    num_results:number;
    last_updated: string;
    results: [{
        title: string;
        abstract: string;
        published_date: string;
        section: string;
        url: string;
        multimedia:[{
            url: string;
            height: number;
            width: number;
            format: string;
            type: string;
            subtype: string;
            caption: string;
            copyright: string;
        }];
    }];   
}
export class MediaService{
    media: any;

    get(){
        return this.media;
    }

    add(mediaitem){
        this.media.push(mediaitem);
    }

    delete(){
        
    }

    constructor(){
        this.media = [
            {
              'name': 'IT',
              'category':'Movie',
              'status':false,
              'stat': 'played'
            },
            {
              'name':'Hellblade',
              'category': 'Game',
              'status': false,
              'stat': 'played'
            }
          ];
    }
    
}
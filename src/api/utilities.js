import noImage from '../NoImage.png'

export function formatResponse(exhibit){
    let exhibitFormatted = {}
    if (exhibit.objectID){
        exhibitFormatted.title = exhibit.title
        exhibitFormatted.artist = exhibit.artistDisplayName
        if(exhibit.PrimaryImage){
            exhibitFormatted.image = exhibit.PrimaryImage
        }else{
            exhibitFormatted.image = noImage
        }
        
    }else if(exhibit.systemNumber){
        exhibitFormatted.title = exhibit._primaryTitle
        exhibitFormatted.artist = exhibit._primaryMaker.name
        const imageidentifier = exhibit._primaryImageId
        if (imageidentifier){
            exhibitFormatted.image = `https://framemark.vam.ac.uk/collections/${imageidentifier}/full/600,400/0/default.jpg`
        }
        else{
            exhibitFormatted.image = noImage
        }
    }else{
        return exhibit
    }
    return exhibitFormatted
}
import noImage from '../NoImage.png'

export function formatResponse(exhibit){
    let exhibitFormatted = {}
    if (exhibit.objectID){
        exhibitFormatted.id = exhibit.objectID
        exhibitFormatted.link = exhibit.objectURL
        exhibitFormatted.site = "Met Museum"
        exhibitFormatted.material = exhibit.medium
        exhibitFormatted.displayTag = "The information about the location of this piece can't be found"
        exhibitFormatted.date = exhibit.objectDate
        exhibitFormatted.onDisplay = true
        exhibitFormatted.title = exhibit.title
        exhibitFormatted.artist = exhibit.artistDisplayName
        if(exhibit.primaryImage){
            console.log('here')
            exhibitFormatted.image = exhibit.primaryImage
        }else{
            exhibitFormatted.image = noImage
        }
        
    }else if(exhibit.systemNumber){
        exhibitFormatted.id = exhibit.systemNumber
        exhibitFormatted.link = 'link unknown'
        exhibitFormatted.site = "Victoria and Albert Museum"
        exhibitFormatted.material = exhibit.objectType
        exhibitFormatted.onDisplay = exhibit._currentLocation.onDisplay
        exhibitFormatted.displayTag = `This piece is currently on display at the ${exhibitFormatted.site} in ${exhibit._currentLocation.displayName}`
        exhibitFormatted.date = exhibit._primaryDate
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
    Object.keys(exhibitFormatted).forEach((key)=>{
        if(!exhibitFormatted[key]){
            exhibitFormatted[key] = `${key} unknown`
        }
    })

    return exhibitFormatted
}

export function findMaxpageSize(metLength,vALength,pageSize){
    const maxMetPages = metLength/pageSize
    const maxVaPages = vALength/pageSize
    if (maxMetPages<maxVaPages){
    }
}
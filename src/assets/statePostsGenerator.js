const imgUrls = ["https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", 
"https://images.ctfassets.net/hrltx12pl8hq/pgYGuW2X3wHni2PG3dLV0/80a2008f53a645da1db3c1b5260fd3fd/hero_spring_6.jpg?fit=fill&w=800&h=450", "https://images.all-free-download.com/images/graphicthumb/beautiful_scenery_02_hd_picture_166319.jpg", 
"https://www.lamodeenimages.com/sites/default/files-lmi/styles/1365x768/public/images/article/homepage/full/miss-dior-exposition-love-nroses-shanghai-2019-la-mode-en-images-cover2.jpg?itok=ZiLeUCR0",
"https://www.wallpapertip.com/wmimgs/0-1264_full-hd-nature-background.jpg",
"https://images.pexels.com/photos/1477459/pexels-photo-1477459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://cdn.wallpapersafari.com/41/34/YlNZ6E.jpg",
"https://www.teahub.io/photos/full/32-324360_desktop-wallpapers-hd-3d-full-screen-nature-desktop.jpg",
"https://wallpapercave.com/wp/wp2570964.jpg"]
const imgSize = ["big", "average", "small", "icon"];
const imgPos = ["left", "right", "middle"]
const text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id arcu non metus mollis tincidunt a vel erat. Curabitur ultrices arcu in sem viverra, ac semper libero pharetra. Donec blandit lorem pulvinar, ultrices tellus eu, facilisis tellus. Aliquam sit amet felis a enim tincidunt semper. Morbi malesuada tempus velit, a tempus metus pellentesque ut. Duis id leo aliquet, consectetur orci id, luctus odio. In hac habitasse platea dictumst. Fusce pharetra interdum mi sit amet bibendum. Fusce ut dui velit. Donec ipsum nibh, lobortis sed maximus a, pulvinar eget erat. Aenean sit amet tempor sem. Sed mattis lorem sed nisl accumsan, quis convallis leo luctus. Ut ut arcu mauris.",
"Morbi sit amet tincidunt neque. Sed ut nunc finibus arcu fermentum suscipit in vel leo. Pellentesque fringilla lectus et risus hendrerit, ac feugiat elit pharetra. Donec non mauris lectus. Fusce eu arcu mauris. Phasellus vestibulum lacus ac leo luctus mattis. Ut convallis non nulla in consectetur. Etiam ac risus maximus, placerat eros sit amet, mollis magna. Aliquam erat volutpat. Nam ante dolor, aliquam quis ultrices non, congue sit amet augue. Donec fermentum nulla felis, a rhoncus nunc sodales vel. Etiam quis ex laoreet, laoreet tortor ac, aliquet purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed congue ligula vel tincidunt malesuada.",
"Sed in augue eget dui rutrum luctus vitae eu orci. Pellentesque turpis nisi, dictum a blandit eget, egestas vel tellus. Pellentesque nec vehicula dolor. Vivamus quis ipsum gravida, posuere sapien vel, dapibus turpis. Curabitur nec mauris at enim interdum sollicitudin. Integer sed ligula at erat porta interdum in eu felis. Quisque vitae scelerisque lacus, in feugiat enim. Nullam eu tempus lorem, eget pulvinar lacus. Etiam sed risus at dui accumsan porta lacinia ut quam. In hac habitasse platea dictumst. Etiam ultricies mi malesuada, aliquam dolor molestie, consequat odio. Quisque sapien justo, maximus facilisis orci sit amet, accumsan auctor sem. Vestibulum blandit lorem quis nulla iaculis blandit. Nullam ut vehicula orci, ut rutrum ligula.",
"Vivamus nibh diam, vehicula eget justo et, tempor tincidunt risus. Suspendisse accumsan, lacus non efficitur iaculis, neque risus iaculis dolor, vitae ultricies quam metus in lacus. Curabitur iaculis odio in tortor egestas, ac accumsan est interdum. Vestibulum ullamcorper lectus eu sem rutrum, eu suscipit urna molestie. In tempus molestie ipsum, quis luctus ligula interdum nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed consectetur sem id nulla faucibus feugiat. Donec eget sagittis ex. Etiam fermentum eget urna quis tincidunt.",
"Sed ullamcorper, tellus sit amet vestibulum dapibus, orci felis tristique ipsum, vel convallis nulla purus nec quam. Nulla consequat sem sed cursus dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis orci lectus, luctus et dui facilisis, sollicitudin vehicula nisi. Proin in cursus ligula. Etiam ac tortor fermentum, pretium nisi id, facilisis augue. Donec enim diam, sodales quis mauris sit amet, venenatis efficitur sem. Sed euismod, massa eu interdum porttitor, ante orci lacinia mi, sit amet auctor diam odio et est. Donec sed efficitur ligula, et dignissim nunc. Suspendisse sit amet enim feugiat, tempus dolor at, sagittis diam. Suspendisse potenti. Integer iaculis, leo eget ultrices suscipit, elit mi imperdiet erat, in maximus dolor leo nec arcu. Praesent interdum ultrices lorem, eu pulvinar mi commodo eget. Vestibulum nulla elit, tincidunt nec mattis ac, luctus ut mi. Pellentesque lacinia consectetur odio ut blandit. In dictum ultrices risus eget dictum.", 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id arcu non metus mollis tincidunt a vel erat. Curabitur ultrices arcu in sem viverra, ac semper libero pharetra. Donec blandit lorem pulvinar, ultrices tellus eu, facilisis tellus. Aliquam sit amet felis a enim tincidunt semper. Morbi malesuada tempus velit, a tempus metus pellentesque ut.",
"Duis id leo aliquet, consectetur orci id, luctus odio. In hac habitasse platea dictumst. Fusce pharetra interdum mi sit amet bibendum. Fusce ut dui velit. Donec ipsum nibh, lobortis sed maximus a, pulvinar eget erat. Aenean sit amet tempor sem. Sed mattis lorem sed nisl accumsan, quis convallis leo luctus. Ut ut arcu mauris.",
"Morbi sit amet tincidunt neque. Sed ut nunc finibus arcu fermentum suscipit in vel leo. Pellentesque fringilla lectus et risus hendrerit, ac feugiat elit pharetra. Donec non mauris lectus. Fusce eu arcu mauris. Phasellus vestibulum lacus ac leo luctus mattis. Ut convallis non nulla in consectetur. Etiam ac risus maximus, placerat eros sit amet, mollis magna.",
"Aliquam erat volutpat. Nam ante dolor, aliquam quis ultrices non, congue sit amet augue. Donec fermentum nulla felis, a rhoncus nunc sodales vel. Etiam quis ex laoreet, laoreet tortor ac, aliquet purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed congue ligula vel tincidunt malesuada."];
const titles = ["Vestibulum ullamcorper euismod vulputate.",
"Quisque sed est pretium, pulvinar lorem quis, bibendum erat.",
"Donec molestie arcu ut nulla varius, in laoreet turpis bibendum.",
"Morbi ac sagittis metus, sagittis ultrices dolor.",
"Aenean vel lacinia nulla, vel finibus lectus.",
"In id erat a sem efficitur vestibulum. In aliquet urna id ligula vehicula, sit amet faucibus erat dapibus.",
"Mauris dictum nunc quis rutrum euismod.",
"Mauris lobortis rhoncus dui, ac tincidunt ipsum faucibus eu.",
"Sed pharetra lectus rutrum consectetur eleifend.",
"Nulla vel interdum tortor."]
const dates = [
"2021-07-12",
"2021-08-09",
"2021-08-23",
"2021-09-03",
"2021-09-08",
"2021-09-29",
"2021-11-04",
"2021-11-17",
"2021-11-25",
"2021-12-15",
"2021-12-20",
"2021-12-21",
"2021-12-22"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let statePostsGenerator = [];
const resultStateLength = getRandomInt(100);

for (let postIndex = 0; postIndex < resultStateLength; postIndex++){
    let bodyLength = getRandomInt(10);
    if (bodyLength === 0) bodyLength = 1;
    let body = [];
    for (let bodyIndex = 0; bodyIndex < bodyLength; bodyIndex++){
        if (bodyIndex === 0) {
            body.push({
                type: "text",
                content: text[getRandomInt(text.length)]
            })
        } else {
            if (getRandomInt(2) === 1) {
                body.push({
                    type: "text",
                    content: text[getRandomInt(text.length)]
                })
            } else {
                body.push({
                    type: "img",
                    content: {
                        position: imgPos[getRandomInt(imgPos.length)],
                        size: imgSize[getRandomInt(imgSize.length)],
                        url: imgUrls[getRandomInt(imgUrls.length)]
                    }
                })
            }
        }
    }
    statePostsGenerator.push({
        id: postIndex,
        title: titles[getRandomInt(titles.length)],
        mainImgUrl: imgUrls[getRandomInt(imgUrls.length)],
        date: dates[getRandomInt(dates.length)],
        body: body
    })
}

export default statePostsGenerator;
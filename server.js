const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:animalWeight', (request, response) => {
    const animalWeight = request.params.animalWeight
    if(animals[animalWeight]){
        response.json(animals[animalWeight])
    }else {
        response.json('unknown')
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})

const animals = {
    0 :{
        'name': 'Etruscan Shrew',
        'photo': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Suncus_etruscus.jpg',
        'fun fact': 'The Etruscan Shrew is the smallest terrestrial mammal on Earth.'
    },
    1 :{
        'name': 'Black-bellied Hamster',
        'photo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Hamster.jpg/800px-Hamster.jpg',
        'fun fact': 'It is the largest hamster in the world',
    },
    2 :{
        'name': 'New England Cottontail',
        'photo': 'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1491/2021/04/24232142/shutterstock_369472535.jpg',
        'fun fact': 'It is the only rabbit species found in the New England area'
    },
    5 :{
        'name': 'Chinese Pangolin',
        'photo': 'https://upload.wikimedia.org/wikipedia/commons/9/94/Manis_pentadactyla_%2829054818144%29.jpg',
        'fun fact': 'This animal also goes by the name of scaly anteater because, although not closely related to anteaters, it specializes in eating ants and termites solely'
    },
    10 :{
        'name': 'Common Raccoon',
        'photo': 'https://i.natgeofe.com/k/6289c775-a06c-426a-badb-8d181a55237b/raccoon-grass_square.jpg',
        'fun fact': 'The English word raccoon comes from the Powhatan word aroughcun, which means "animal that scratches with its hands."'
    },
    15 :{
        'name': 'Central American Spider Monkey',
        'photo': 'https://inaturalist-open-data.s3.amazonaws.com/photos/216610095/large.jpeg',
        'fun fact': 'The underside of the end of their tail is hairless and has a fleshy pad, which is unique to each monkey (just like a fingerprint is to humans).'
    },
    20 :{
        'name': 'Northern River Otter',
        'photo': 'https://www.marylandzoo.org/wp-content/uploads/2017/10/river_otter_web.jpg',
        'fun fact': 'North American river otters can close their nostrils to keep water out during long dives.'
    },
    25 :{
        'name': 'Iberian Lynx',
        'photo': 'https://www.aljazeera.com/wp-content/uploads/2022/02/h_56733953.jpg?resize=1920%2C1080',
        'fun fact': 'The Iberian lynx is the world\'s most endangered feline species, but conservation measures have seen its population inch back above 400.'
    },
    30 :{
        'name': 'Coyote',
        'photo': 'https://cdn.britannica.com/45/125545-050-B705597E/Coyote.jpg',
        'fun fact': 'Coyotes are by far the most vocal wild mammals in North America. Researchers have identified 11 different vocalizations that are used to communicate with others in their family group'
    },
    35 :{
        'name': 'Caracal',
        'photo': 'https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_caracal.jpg',
        'fun fact': 'They have 20 separate muscles in their ears that help them move in any direction to sense prey. By comparison, humans have just 6 muscles in their ears'
    },
    40 :{
        'name': 'Bush Duiker',
        'photo': 'https://www.awf.org/sites/default/files/styles/horizontal_image/public/2020-04/Website_SpeciesPage_Feedback_R203_02_Solutions.jpg?h=05d4a2d9&itok=_Z74Uh1g',
        'fun fact': 'The name duiker comes from the Dutch word "diver". When disturbed, the duiker dives into thick cover to hide'
    },
    45 :{
        'name': 'African Crested Porcupine',
        'photo': 'https://www.honoluluzoo.org/wp-content/uploads/Crested-porcupine-3.jpg',
        'fun fact': 'Crested porcupine quills are said to have been an inspiration for the original and new developments to the hypodermic needle.'
    },
    50 :{
        'name': 'Lynx',
        'photo': 'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/lynx-mather-02a.jpg?w=1600',
        'fun fact': 'Lynxes have built-in snowshoes. When their feet strike the ground, they will extend out to properly distribute their weight in the snow'
    },
    55 :{
        'name': 'Eurasian Beaver',
        'photo': 'https://static.wikia.nocookie.net/zoo_builder/images/2/21/Eurasian_Beaver.jpg/revision/latest?cb=20200727150955',
        'fun fact': 'Split nails on their rear toes are used for combing oils out of their oil glands into the guard hairs. Due to these oils, the beavers can keep their skin dry and are able to spend long periods of time in cold water. '
    },
    60 :{
        'name': 'Giant Anteater',
        'photo': 'https://www.potawatomizoo.org/wp-content/uploads/2018/03/Giant-Anteater-e1659990501193.jpg',
        'fun fact': 'The average giant anteater eats up to 30,000 ants and termites in a day.'
    },
    65 :{
        'name': 'Wallaroo',
        'photo': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Wallaroo_002.jpg',
        'fun fact': 'Wallaroos are not a mix of wallabies and kangaroos. They are a distinct species.'
    },
    70 :{
        'name': 'Pampas Deer',
        'photo': 'https://static.wikia.nocookie.net/naturerules1/images/0/0a/44be4bb6adc104c8b09adc6442325288.jpg/revision/latest?cb=20210306171424',
        'fun fact': 'Throughout the winter they live alone, or in pairs. But with the return of spring they gather into larger groups, forming herds of about 10 to 20 animals'
    },
    75 :{
        'name': 'Chacoan peccary',
        'photo': 'https://www.sfzoo.org/wp-content/uploads/2021/03/img_chacoanpeccary_mh_lg.jpg',
        'fun fact': 'Chacoan peccary was classified as a separate species only in 1975, becoming one of the most recently discovered large mammal species.'
    },
    80 :{
        'name': 'Chital',
        'photo': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/A_chital_stag_1.JPG',
        'fun fact': 'They also lick and eat their shed antlers that contain nutrients.'
    },
    85 :{
        'name': 'Springbok',
        'photo': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Antidorcas_marsupialis%2C_male_%28Etosha%2C_2012%29.jpg',
        'fun fact': ''
    },
    90 :{
        'name': 'Markhor',
        'photo': '',
        'fun fact': ''
    },
    95 :{
        'name': 'Brown Hyena',
        'photo': '',
        'fun fact': ''
    },
    100 :{
        'name': 'Galapagos Fur Seal',
        'photo': '',
        'fun fact': ''
    },
    110 :{
        'name': 'Vicuna',
        'photo': '',
        'fun fact': ''
    },
    120 :{
        'name': 'Red Kangaroo',
        'photo': '',
        'fun fact': ''
    },
    130 :{
        'name': 'Aardvark',
        'photo': '',
        'fun fact': ''
    },
    140 :{
        'name': 'Orangutan',
        'photo': '',
        'fun fact': ''
    },
    150 :{
        'name': 'Bighorn Sheep',
        'photo': '',
        'fun fact': ''
    },
    160 :{
        'name': 'Dama Gazelle',
        'photo': '',
        'fun fact': ''
    },
    170 :{
        'name': 'Jaguar',
        'photo': '',
        'fun fact': ''
    },
    180 :{
        'name': 'Spotted Seal',
        'photo': '',
        'fun fact': ''
    },
    190 :{
        'name': 'Red River Hog',
        'photo': '',
        'fun fact': ''
    },
    200 :{
        'name': 'Addax',
        'photo': '',
        'fun fact': ''
    },
    210 :{
        'name': 'Lechwe',
        'photo': '',
        'fun fact': ''
    },
    220 :{
        'name': 'Sloth Bear',
        'photo': '',
        'fun fact': ''
    },
    230 :{
        'name': 'Moon Bear',
        'photo': '',
        'fun fact': ''
    },
    240 :{
        'name': 'Topi',
        'photo': '',
        'fun fact': ''
    },
    250 :{
        'name': 'Harbor Seal',
        'photo': '',
        'fun fact': ''
    },
    260 :{
        'name': 'Giant Panda',
        'photo': '',
        'fun fact': ''
    },
    270 :{
        'name': 'Eld\'s Deer',
        'photo': '',
        'fun fact': ''
    },
    280 :{
        'name': 'South African Fur Seal',
        'photo': '',
        'fun fact': ''
    },
    290 :{
        'name': 'Black Wildebeest',
        'photo': '',
        'fun fact': ''
    },
    300 :{
        'name': 'Mountain Gorilla',
        'photo': '',
        'fun fact': ''
    },
    320 :{
        'name': 'Mountain Tapir',
        'photo': '',
        'fun fact': ''
    },
    330 :{
        'name': 'Mountain Anoa',
        'photo': '',
        'fun fact': ''
    },
    340 :{
        'name': 'American Black Bear',
        'photo': '',
        'fun fact': ''
    },
    350 :{
        'name': 'Hartebeest',
        'photo': '',
        'fun fact': ''
    },
    360 :{
        'name': 'Blue Wildebeest',
        'photo': '',
        'fun fact': ''
    },
    370 :{
        'name': 'South African Oryx',
        'photo': '',
        'fun fact': ''
    },
    380 :{
        'name': 'Lion',
        'photo': '',
        'fun fact': ''
    },
    390 :{
        'name': 'Scimitar-horned Oryx',
        'photo': '',
        'fun fact': ''
    },
    400 :{
        'name': 'California Sea Lion',
        'photo': '',
        'fun fact': ''
    },
    410 :{
        'name': 'New Zealand sea lion',
        'photo': '',
        'fun fact': ''
    },
    440 :{
        'name': 'Red Deer',
        'photo': '',
        'fun fact': ''
    },
    450 :{
        'name': 'Atlantic white-sided Dolphin',
        'photo': '',
        'fun fact': ''
    },
    470 :{
        'name': 'Pygmy Hippopotamus',
        'photo': '',
        'fun fact': ''
    },
    490 :{
        'name': 'Okapi',
        'photo': '',
        'fun fact': ''
    },
    500 :{
        'name': 'Turkmenian Kulan',
        'photo': '',
        'fun fact': ''
    },
    'unknown' :{
        'name': 'Sorry, we don\'t have an animal for that weight',
    }
}    
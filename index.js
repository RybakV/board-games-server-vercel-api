const express = require('express')

const app = express()
const PORT = 4000

//DATA
const data = {
    'games': [
        {
            'id': '1',
            'title': 'Пацюча пастка',
            'genre': ['horror','Страшне'],
            'description':'Гра \"Пацюча пастка\" - це пригода для 2-4 гравців, які грають за пацюків, що живуть у старому будинку. Гравці повинні зібрати якомога більше їжі, проходячи через кімнати, тунелі та засіки, де чекає на них багато небезпек. Гра проходить у темряві, тому гравці можуть користуватися тільки фонариками, що додає більше напруження. Але увага, є хижі ховрахи, які полюють на пацюків. Якщо гравці збирають забагато їжі, то це може привернути увагу хижаків. Переможцем стає той, хто збере найбільшу кількість їжі та повернеся до своєї нори живим.',
            'people': [2,5],
            'difficulty': ['medium','середній'],
            'duration': 90,
            'img': 'bg-1.jpg'
        },
        {
            'id': '2',
            'title': 'Таємний експеримент',
            'genre': ['scifi','Sci-Fi'],
            'description':'Гра \"Таємний експеримент\" - це квест для 2-6 гравців, які відправляються в підземну лабораторію, де створюються біо-роботи. Гравці повинні знайти та використати різноманітні інструменти, щоб взаємодіяти з комп\'ютерами, знайти схованки та розв\'язати головоломки. Однак, у них є обмежений час, щоб знайти вихід, оскільки лабораторія може обвалитися в будь-який момент. Біо-роботи перешкоджають їм на кожному кроці, тому гравці повинні уникнути бойових зіткнень. Ціль гри - вийти з лабораторії, з якомога більшою кількістю секретних розробок.',
            'people': [2,6],
            'difficulty': ['hard','складний'],
            'duration': 120,
            'img': 'bg-2.jpg'
        },
        {
            'id': '3',
            'title': 'Готель найманців',
            'genre': ['detective','Детективне'],
            'description':'Гра \"Вбивство в готелі\" - це детективна гра для 3-6 гравців, які грають ролі детективів, що розслідують вбивство, що сталося в підвалі готелю. Гравці повинні взаємодіяти зі свідками, зібрати показання та зібрати докази щоб з\'ясувати, хто здійснив злочин. Підозрюваним можуть стати навіть гравці, що додає несподівані повороти сюжету. Ігрові карти та деталі гри містять підказки та натяки, тому розкрити злочин вдасться лише найкмітливішому гравцеві. Переможцем стає той, хто знаходить вбивцю та представляє достатньо доказів, щоб довести провину.',
            'people': [3,6],
            'difficulty': ['hard','складний'],
            'duration': 100,
            'img': 'bg-3.jpg'
        },
        {
            'id': '4',
            'title': 'Занепад сузір’я D64',
            'genre': ['mystical','Містичне'],
            'description':'Гра \"Занепад планети D64\" - це настільна гра для 3-7 гравців, які керують космічними експедиціями на планеті, де колись існувала високорозвинена цивілізація. Гравці повинні знайти та дослідити залишки цивілізації, зібрати різноманітні артефакти та з\'ясувати, що сталося з цією цивілізацією. Гравці отримують картки зі слідами цивілізації та виконують різні місії, щоб дізнатися більше про історію планети. Гра також містить елементи стратегії, оскільки гравці повинні приймати рішення про те, які області досліджувати та які ресурси використовувати, щоб знайти артефакти та розв\'язати загадки. Переможцем стає той, хто збирає найбільшу кількість артефактів та вирішує загадки цивілізації.',
            'people': [3,7],
            'difficulty': ['hard','складний'],
            'duration': 120,
            'img': 'bg-4.jpg'
        },
        {
            'id': '5',
            'title': 'Лист до оазису',
            'genre': ['adventure','Пригодне'],
            'description':'Гра \"Лист до оазису\" - це настільна гра для 2-4 гравців, де кожен гравець грає за пустельних мандрівників, що шукають оазис в безводній пустелі. Гравці повинні обирати правильний шлях через пустелю, збирати ресурси та воду, щоб пережити, і відбирати ресурси у своїх суперників, щоб домогтися перемоги. Основна мета полягає в тому, щоб дійти до оазису першим і зібрати якомога більше ресурсів. Гравці можуть використовувати картки подій, щоб отримати перевагу або завадити іншим гравцям. Гра містить елементи стратегії та шансу, оскільки гравці повинні вирішувати, який шлях обрати та які ресурси зібрати, щоб збільшити свої шанси на перемогу. Переможцем стає той, хто дійде до оазису першим і зібере найбільшу кількість ресурсів.',
            'people': [2,4],
            'difficulty': ['easy','легкий'],
            'duration': 90,
            'img': 'bg-5.jpg'
        },
        {
            'id': '6',
            'title': 'Шпигун з минулого',
            'genre': ['detective','Детективне'],
            'description':'Гра \"Шпигун з минулого\" - це настільна гра для 2-4 гравців, де кожен гравець грає за шпигуна з минулого, який повернувся до світу злочину, щоб розкрити та запобігти злочинам. Гравці повинні зібрати докази та розгадати головоломки, щоб вивчити плани злочинців та зупинити їх. Основна мета полягає в тому, щоб дізнатися якнайбільше інформації про злочинців та зупинити їх, перш ніж буде занадто пізно. Гравці можуть використовувати картки подій, щоб отримати перевагу або завадити іншим гравцям. Гра містить елементи дедукції та шансу, оскільки гравці повинні вирішувати, яку інформацію зібрати та які ходи зробити, щоб збільшити свої шанси на перемогу. Переможцем стає той, хто першим збере достатньо доказів, щоб розкрити плани злочинців та зупинити їх.',
            'people': [4,6],
            'difficulty': ['easy','легкий'],
            'duration': 80,
            'img': 'bg-6.jpg'
        },
    ]
}


app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})


app.get('/', (req, res) => {
    res.send('Board games api')
})
app.get('/games', (req, res) => {
    res.send(JSON.stringify(data.games))
})

app.get('/games/:id', (req, res) => {
    const id = req.params.id;
    res.send(JSON.stringify(data.games[id -1]))
})

// Export the Express API
module.exports = app
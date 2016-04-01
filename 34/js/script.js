var TestPage = {
    question: ['вопрос №1', 'вопрос №2', 'вопрос №3'],

    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],

    test: function() {
        //var question = ['вопрос №1', 'вопрос №2', 'вопрос №3'];
        //var answer = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

        var wrapper = document.createElement('div');// создаем элемент в документе через скрипт
        wrapper.classList.add('wrapper');// добавляем класс элементу
        var body = document.querySelector('body'); // находим родительский єлемент, куда вставлть
        body.appendChild(wrapper);// добавляем в body новый "элемент"

        var title = document.createElement('h3');// создаем элемент в документе через скрипт
        title.classList.add('title');// добавляем класс элементу
        title.innerHTML = 'Тест по программированию'; // добавляем текст в элемент
        wrapper.appendChild(title);// добавляем в wraper новый "элемент"

        var list = document.createElement('ol');// создаем элемент в документе через скрипт
        list.classList.add('list');// добавляем класс элементу
        wrapper.appendChild(list);
        for (var i = 0; i < TestPage.question.length; i++) {
            var questionLi = document.createElement('li');
            questionLi.classList.add('questionLi');
            questionLi.innerHTML = TestPage.question[i];
            list.appendChild(questionLi);

            var listAnswer = document.createElement('ul');// создаем элемент в документе через скрипт
            listAnswer.classList.add('listAnswer');// добавляем класс элементу
            questionLi.appendChild(listAnswer);

            for (var k = 0; k < TestPage.answer.length; k++) {
                var answerLi = document.createElement('li');// создаем элемент в документе через скрипт
                answerLi.classList.add('answerLi');// добавляем класс элементу
                listAnswer.appendChild(answerLi);

                var answerLabel = document.createElement('label');// создаем элемент в документе через скрипт
                answerLi.appendChild(answerLabel);

                var answerCheckbox = document.createElement('input');// создаем элемент в документе через скрипт
                answerCheckbox.type = 'checkbox';// добавляем type элементу
                answerLabel.appendChild(answerCheckbox);
                var answerText = document.createElement('span');// создаем элемент в документе через скрипт
                answerText.classList.add('answerText');// добавляем класс элементу
                answerText.innerHTML = TestPage.answer[k];
                answerLabel.appendChild(answerText);

            }

        }

        var button = document.createElement('button');// создаем элемент в документе через скрипт
        button.classList.add('button');
        button.innerHTML = 'оценить результат';
        wrapper.appendChild(button);
    }
};

TestPage.test();








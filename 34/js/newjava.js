var Test = {
    question: ['вопрос №1', 'вопрос №2','вопрос №3'],

    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],

    createWrapper: function() {
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        return wrapper;
    },

    addWrapper: function() {
        //createWrapper();
        var body = document.querySelector('body'); // находим родительский єлемент, куда вставлть
        body.appendChild(Test.createWrapper());// добавляем в body новый "элемент"
    },

    createH3: function(){
        var title = document.createElement('h3');// создаем элемент в документе через скрипт
        title.classList.add('title');// добавляем класс элементу
        title.innerHTML = 'Тест по программированию'; // добавляем текст в элемент
        return title;
    },

    addH3: function(){
        Test.createWrapper().appendChild(Test.createH3());// добавляем в wraper новый "элемент"
    },

    createList: function(){
        var list = document.createElement('ol');// создаем элемент в документе через скрипт
        list.classList.add('list');// добавляем класс элементу
        return list;
    },

    addList: function(){
        Test.createWrapper().appendChild(Test.createList());
    },

    createQuestLi: function(){
        var questionLi = document.createElement('li');
        questionLi.classList.add('questionLi');
        questionLi.innerHTML = Test.question [i];
        return questionLi;
    },

    addQuestLi: function(){
        Test.createList().appendChild(Test.createQuestLi());
    },

    createAnswer: function () {
        var listAnswer = document.createElement('ul');// создаем элемент в документе через скрипт
        listAnswer.classList.add('listAnswer');// добавляем класс элементу
        return listAnswer;
    },

    addAnswer: function(){
        Test.createQuestLi().appendChild(Test.createAnswer());
    },

    createAnswerLi: function (){
        var answerLi = document.createElement('li');// создаем элемент в документе через скрипт
        answerLi.classList.add('answerLi');// добавляем класс элементу
        return answerLi;
    },

    addAnswerLi: function (){
        Test.createAnswer().appendChild(Test.createAnswerLi());
    },

    createAnswerLabel: function(){
        var answerLabel = document.createElement('label');// создаем элемент в документе через скрипт
        return answerLabel;
    },

    addAnswerLabel: function(){
        Test.createAnswerLi().appendChild(Test.createAnswerLabel());
    },

    createCheckbox: function(){
        var answerCheckbox = document.createElement('input');// создаем элемент в документе через скрипт
        answerCheckbox.type ='checkbox' ;// добавляем type элементу
        return answerCheckbox;
    },

    addCheckbox: function (){
        Test.createAnswerLabel().appendChild(Test.createCheckbox());
    },

    createAnswerText: function(){
        var answerText = document.createElement('span');// создаем элемент в документе через скрипт
        answerText.classList.add('answerText');// добавляем класс элементу
        answerText.innerHTML = Test.answer [k];
        return answerText;
    },

    addAnswerText: function (){
        Test.createAnswerLabel().appendChild(Test.createAnswerText());
    },


    createVariants: function(){
        for(var k=0; k<answer.length; k++){
            Test.createAnswerLi();
            Test.addAnswerLi();
            Test.createCheckbox();
            Test.addCheckbox();
            Test.createAnswerText();
            Test.addAnswerText();
        }
    },

    createQuestions: function(){
        for(var i=0; i<Test.question.length; i++){
            Test.createQuestLi();
            Test.addQuestLi();
            Test.createAnswer();
            Test.addAnswer();
            Test.createVariants();
        }
    },

    createButon: function (){
        var button = document.createElement('button');// создаем элемент в документе через скрипт
        button.classList.add('button');
        button.innerHTML = 'оценить результат';
        return button;
    },

    addButon: function(){
        Test.createWrapper().appendChild(Test.createButon());
    },

    init: function() {
        Test.addWrapper();
        Test.createH3();
        Test.addH3();
        Test.addList();
        Test.addButon()
        Test.createQuestLi();
        Test.addQuestLi();
        Test.createAnswer();
        Test.addAnswer();
        Test.createVariants();
    }
};
//Test.createQuestions();
Test.init();

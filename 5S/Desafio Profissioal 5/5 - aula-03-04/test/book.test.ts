import app from '../src/app'
import { describe, it, expect } from '@jest/globals'
import bookModel from '../src/books/schemas/book.schema'
import * as request from 'supertest'

describe('Testando endpoints de books', () => {    
    it('Deve inserir um livro no banco de dados', async () => {
        const bookMock = {
            title: "Androides sonham com ovelhas elétricas?", // String is shorthand for {type: String}
            author: "Philip K. Dick",
            ISBN: "123-A",
            price: 20.99
        }

        const response = await request.default(app).post('/books').send(bookMock);
        console.log('BOOK do response: ', response.body);
        const findedBook = await bookModel.findById(response.body._id);
        console.log('BOOK do banco: ', findedBook);

        expect (response.status).toEqual(201);
        expect (response.body._id).toBeDefined();
        expect(bookMock.title).toBe(findedBook?.title)
        expect(bookMock.author).toBe(findedBook?.author)
        expect(bookMock.ISBN).toBe(findedBook?.ISBN)
        expect(bookMock.price).toBe(findedBook?.price)
    })

    it('Deve recuperar todos os livros do banco', async () =>{
        const response = await request.default(app).get('/books');
        const totalBooksOnDatabase = await bookModel.countDocuments();

        expect (response.status).toEqual(200);
        expect (response.body.length).toEqual(totalBooksOnDatabase);
    })

    it('Deve recuperar um id especifico', async () => {
        const id = '660dffa979fdb25d92bdfa7d';
        const response = await request.default(app).get(`/books/${id}`);
        
        expect (response.status).toEqual(200);
        expect (response.body._id).toEqual(id);
    })
})
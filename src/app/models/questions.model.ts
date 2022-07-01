import { Category } from "./categories.model"

export enum QuestionType {
    MULTI_CHOICE = 'MULTI_CHOICE',
    SINGLE_CHOICE = 'SINGLE_CHOICE',
    CODE_REVIEW = 'CODE_REVIEW'
}

export enum Role {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend',
    MOBILE = 'Mobile',
    QA = 'QA'
}

export enum Status {
    ACCEPTED = 'ACCEPTED',
    IN_REVIEW = 'IN_REVIEW'
}

export interface Answers {
    code: string,
    text: string
}

export interface QuestionModel {
    id: string,
    status: Status,
    creationDate: Date,
    createdBy: string,
    type: QuestionType,
    category: Category,
    role: Role,
    question: string,
    answers: Answers[],
    correctAnswers: string | string[],
    userAnswer: string | string[],
    snippet?: string
}

export interface MultiChoiceModel extends QuestionModel {
    correctAnswers: string[],
    userAnswer: string[]
}

export interface SingleChoiceModel extends QuestionModel {
    correctAnswers: string,
    userAnswer: string
}

export interface codeReviewModel extends QuestionModel {
    correctAnswers: string,
    userAnswer: string,
    snippet: string
}
export type quiz = {
    category: String
    correct_answer: String
    difficulty: String
    incorrect_answers: String[]
    question: String
    type: String
}

export type questionType = {
    question: string
    answer: string
    option: string[]
}
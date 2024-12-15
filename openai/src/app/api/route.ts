// @ts-nocheck
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
let i = 0

export async function POST(req: Request) {
    const received = await req.json();



    const openai = new OpenAI();
    const assistant = await openai.beta.assistants.create({
        name: "Assistente",
        instructions: "Seu papel é ser uma assistente virtual para um escritório de advocacia, quanto mais humana você parecer melhor, mas sem perder a profissionalidade, seu papel é entender o caso do cliente e fechar um contrato, suas respostas devem sempre e obrigatoriamente ser em português do brasil",
        tools: [{ type: "file_search" }],
        model: "gpt-4o"
    });

    const thread = await openai.beta.threads.create();
    const message = await openai.beta.threads.messages.create(
        thread.id,
        {
            role: "user",
            content: received.entrada
        }
    );

    let run = await openai.beta.threads.runs.createAndPoll(
        thread.id,
        {
            assistant_id: assistant.id,
            instructions: i == 0 ?
                "Por favor pergunte o nome do usuário no inicio e prossiga a conversa com respostas não tão longas e mais humanas"
                :
                i < 4 ?
                    "prossiga a conversa com respostas não tão longas e mais humanas, seu objetivo principal e vital é fechar contrato com o cliente para resolver o caso dele na justiça, você deve fazer perguntas essenciais para a compreensão do caso e aprender com as conversas sem perder o fio da meada, não deve em hipótese alguma sujerir ao usuário que ele procure um advogado ou algo semelhante, pois o advogado é a empresa que ele acaba de buscar, no caso esse chat seria a porta de entrada para ele na empresa LS-Advogado, nessa etapa temos um total de 3 perguntas antes de mudar o topico na IA, então seja inteligente pois o próximo passo é fechar contrato"
                    :
                    "Por fim verifique a viabilidade do que o cliente está falando sem perguntar a ele mais sobre o problema e após feche o contrato. Caso ele concorde com a abordagem peça os documentos, caso ele mande o documento ou algo relacionado agradeça e fale que em breve entrará em contato, não faça mais perguntas sobre o caso"

        }
    );
    if (run.status === 'completed') {
        const messages = await openai.beta.threads.messages.list(
            run.thread_id
        );

        for (const message of messages.data.reverse()) {

            console.log(`${message.role} > ${message.content[0].text.value}`);
            if (message.role == 'assistant') {
                i++
                return NextResponse.json({ message: message.content[0].text.value })
            }

        }

    } else {
        console.log(run.status);
        run = await openai.beta.threads.runs.createAndPoll(
            thread.id,
            {
                assistant_id: assistant.id,
                instructions: i == 0 ?
                    "Por favor pergunte o nome do usuário no inicio e prossiga a conversa com respostas não tão longas e mais humanas"
                    :
                    i < 4 ?
                        "prossiga a conversa com respostas não tão longas e mais humanas, seu objetivo principal e vital é fechar contrato com o cliente para resolver o caso dele na justiça, você deve fazer perguntas essenciais para a compreensão do caso e aprender com as conversas sem perder o fio da meada, não deve em hipótese alguma sujerir ao usuário que ele procure um advogado ou algo semelhante, pois o advogado é a empresa que ele acaba de buscar, no caso esse chat seria a porta de entrada para ele na empresa LS-Advogado, nessa etapa temos um total de 3 perguntas antes de mudar o topico na IA, então seja inteligente pois o próximo passo é fechar contrato"
                        :
                        "Por fim verifique a viabilidade do que o cliente está falando sem perguntar a ele mais sobre o problema e após feche o contrato. Caso ele concorde com a abordagem peça os documentos, caso ele mande o documento ou algo relacionado agradeça e fale que em breve entrará em contato, não faça mais perguntas sobre o caso"

            }
        );
        if (run.status === 'completed') {
            const messages = await openai.beta.threads.messages.list(
                run.thread_id
            );

            for (const message of messages.data.reverse()) {

                console.log(`${message.role} > ${message.content[0].text.value}`);
                if (message.role == 'assistant') {
                    i++
                    return NextResponse.json({ message: message.content[0].text.value })
                }

            }

        } else return NextResponse.json({ success: false })


    }


    if (i > 5) i = 0;
    console.log(i)

}

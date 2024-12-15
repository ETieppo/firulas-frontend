"use client";
import { FormEvent, useEffect, useState, useRef } from "react";
import { PiPaperPlaneRight } from "react-icons/pi";

// Definição da interface para mensagens
interface Message {
    messageFromUser: boolean;
    message: string;
}

export default function Home() {
    const [entrada, setEntrada] = useState('');
    const [success, setSuccess] = useState(true);
    const [chat, setChat] = useState<Message[]>([]); // Estado chat corretamente desestruturado e tipado
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [chat]);
        
    // Função para enviar o formulário
    function enviaForm(e: FormEvent) {
        e.preventDefault();

        if (entrada.trim() === "") return; // Evita enviar mensagens vazias

        const userMessage: Message = { messageFromUser: true, message: entrada };
        setChat(prevChat => [...prevChat, userMessage]); // Adiciona a mensagem do usuário ao chat

        // Envia a mensagem para a API
        fetch('/api/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // Define o cabeçalho correto
            body: JSON.stringify({ entrada: entrada })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSuccess(!data.success)
                if (data.message) { // Verifica se a resposta contém a mensagem
                    const botMessage: Message = { messageFromUser: false, message: data.message };
                    setChat(prevChat => [...prevChat, botMessage]); // Adiciona a resposta da API ao chat
                }
            })
            .catch(err => console.error('Erro ao enviar mensagem:', err));

        setEntrada(''); // Limpa o campo de entrada após o envio
    }

    return (
        <div className="flex flex-col h-screen max- w-full items-center justify-center bg-gradient-to-t from-green-950 via-black p-6 lg:p-20">
            <div className="flex flex-col w-full overflow-auto mb-4">
                {chat.map((mensagem, index) => (
                    <div
                        key={index}
                        className={`max-w-xs md:max-w-md lg:max-w-lg ${
                            mensagem.messageFromUser ? 'ml-auto bg-blue-500 text-white' : 'mr-auto bg-gray-700 text-white'
                        } rounded p-4 m-2`}
                    >
                        {mensagem.message}
                        <div ref={messagesEndRef} />
                    </div>
                ))}
            </div>
            <form onSubmit={enviaForm} className="flex flex-row mt-auto w-full bg-black border rounded p-2 px-4 mb-10 lg:mb-0">
                <input
                    className="w-full outline-none rounded bg-black text-white resize-none p-2"
                    value={entrada}
                    onChange={(e) => setEntrada(e.target.value)}
                    placeholder="Digite sua mensagem..."
                />
                <button
                    type="submit"
                    className="flex items-center justify-center w-10 h-10 ml-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                >
                    <PiPaperPlaneRight />
                </button>
            </form>
            <div className={`${success?'hidden':'flex'} text-xl text-white fixed inset-0 text-center pointer-events-none`}>
                <div className="shadow-lg shadow-purple-600 w-full  bg-black h-8">Erro de comunicação com a OpenAI</div>
            </div>
        </div>
    );
}

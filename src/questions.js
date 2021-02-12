
const questions = [
    {
        questionText: 'You need to transmit PII via email and you want to maintain its confidenitality. Which of the following choices is the BEST Solution?',
        answerOptions: [
            { answerText: ' Use hashes.', isCorrect: false },
            { answerText: 'Encrypt it before sending', isCorrect:true },
            { answerText: 'Protect it with a digital signature.', isCorrect: false },
            { answerText: 'Use RAID.', isCorrect: false },
        ],
    },
    {
        questionText: 'Management has mandated the use of digital signatures by all personnel within your organization. Which of the following use cases does this primarily support?',
        answerOptions: [
            { answerText: ' Supporting confidentiality', isCorrect: false },
            { answerText: 'Supporting availability', isCorrect: true },
            { answerText: 'Supporting obfuscation', isCorrect: false },
            { answerText: ' Supporting non-repudiation', isCorrect: false },
        ],
    },
    {
        questionText: 'As the CTO, Marge is implementing a security program. She has included security controls to address confidentiality and availability. Of the following choices, what else should she include?',
        answerOptions: [
            { answerText: ' Ensure critical systems provide uninterrupted service', isCorrect: false },
            { answerText: 'Protect data-in-transit from unauthorized disclosure', isCorrect: false },
            { answerText: 'Ensure systems are not susceptible to unauthorized changes.', isCorrect: true},
            { answerText: 'Secure data to prevent unauthorized disclosure.', isCorrect: false },
        ],
    },
    {
        questionText: 'Your organization is planning to establish a secure link between one of your mailservers and a business partner’s mailserver. The connection will use the Internet. Which protocol isthe BEST choice?',
        answerOptions: [
            { answerText: 'TLS', isCorrect: true},
            { answerText: 'SMTP', isCorrect: false },
            { answerText: 'HTTP', isCorrect: false },
            { answerText: 'SSH', isCorrect: false },
        ],
    },
    {
        questionText:'You need to send several large files containing proprietary data to a business partner. Which of the following is the BEST choice for this task?',
        answerOptions:[
            {answerText: 'FTP',isCorrect:false},
            {answerText: 'SNMPv3',isCorrect:false},
            {answerText: 'SFTP',isCorrect:true},
            {answerText: 'SRTP',isCorrect:false},
        ]
    },
    {
        questionText:'Bart is adding a DMZ into his organization’s network. Which of the following is the BEST description of why he would do so?',
        answerOptions:[
            {answerText: 'To increase security for servers accessed from public networks',isCorrect:true},
            {answerText: 'To provide a secure physical location for networking equipment',isCorrect:false},
            {answerText: 'To lure attackers to a fake server or fake network',isCorrect:false},
            {answerText: 'To cache data retrieved from a web server',isCorrect:false},
        ]
    },
    {
        questionText:'Your organization wants to prevent employeesfrom accessing file sharing web sites.Which of the following choices will meet this need? ',
        answerOptions:[
            {answerText: 'Content inspection',isCorrect:false},
            {answerText: 'Malware inspection',isCorrect:false},
            {answerText: 'URL filter',isCorrect:true},
            {answerText: 'Web application firewall',isCorrect:false},
        ]
    },
    {
        questionText:'You are tasked with configuring a switch so that it separates VoIP and data traffic. Which of the following provides the BEST solution?',
        answerOptions:[
            {answerText: 'NAC',isCorrect:false},
            {answerText: 'DMZ',isCorrect:false},
            {answerText: 'SRTP',isCorrect:false},
            {answerText: 'VLAN',isCorrect:true},
        ]
    },
    {
        questionText:'Of the following choices, what can you use to divert malicious attacks on your network away from valuable data to worthless, fabricated data?',
        answerOptions:[
            {answerText: 'IPS',isCorrect:false},
            {answerText: 'Proxy server',isCorrect:false},
            {answerText: 'Web application firewall',isCorrect:false},
            {answerText: 'Honeypot',isCorrect:true},
        ]
    },
    {
        questionText:'Management asks you if you can modify the wireless network to prevent users from easily discovering it. Which of the following would you modify to meet this goal?',
        answerOptions:[
            {answerText: 'CCMP',isCorrect:false},
            {answerText: 'WPA2 Enterprise',isCorrect:false},
            {answerText: 'SSID broadcast',isCorrect:true},
            {answerText: 'MAC address filter',isCorrect:false},
        ]
    },
    {
        questionText:'Your organization recently purchased some laptops that include a TPM. Which of the followingBEST identifies what theTPM provides?',
        answerOptions:[
            {answerText: 'Detection of unauthorized data transfers',isCorrect:false},
            {answerText: 'A hardware root of trust',isCorrect:true},
            {answerText: 'Sandboxing',isCorrect:false},
            {answerText: 'An external security device used to store cryptographic keys',isCorrect:false},
        ]
    },
    {
        questionText:'Management wants to ensure that employees do not print any documents that include customer or employee PII. Which of the following solutions would meet this goal?',
        answerOptions:[
            {answerText: 'HSM',isCorrect:false},
            {answerText: 'TPM',isCorrect:false},
            {answerText: 'VLAN',isCorrect:false},
            {answerText: 'DLP',isCorrect:true},
        ]
    },
    {
        questionText:'Your organization is preparing to deploy a web-based application,which will accept user input. Which of the following will BEST test the reliability of this application to maintain availability and data integrity? ',
        answerOptions:[
            {answerText: 'Model verification',isCorrect:false},
            {answerText: 'Input validation',isCorrect:false},
            {answerText: 'Error handling',isCorrect:false},
            {answerText: 'Dynamic analysis',isCorrect:true},
        ]
    },
    {
        questionText:'Which of the following is the LOWEST cost solution for faultWhich of the following is the LOWEST cost solution for fault tolerance?',
        answerOptions:[
            {answerText: 'Load balancing',isCorrect:false},
            {answerText: 'Round-robin scheduling',isCorrect:false},
            {answerText: 'RAID',isCorrect:true},
            {answerText: 'Warm site',isCorrect:false},
        ]
    },
    {
        questionText:'Your organization isinvestigating possible methods ofsharing encryption keys over a public network. Which of the following is the BEST choice? ',
        answerOptions:[
            {answerText: 'CRL',isCorrect:false},
            {answerText: 'PBKDF2',isCorrect:false},
            {answerText: 'Hashing',isCorrect:false},
            {answerText: 'ECDHE',isCorrect:true},
        ]
    },

];
export default  questions;
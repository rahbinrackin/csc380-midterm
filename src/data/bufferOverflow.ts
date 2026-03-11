import type { MCQuestion } from "../types";

export const bufferOverflowQuestions: MCQuestion[] = [
  {
    id: "bo1",
    question:
      "A user calls to report a problem with an application you support. The user says when she accidentally pasted an entire paragraph into an input field, the application crashed. You are able to consistently reproduce the results using the same method. What vulnerability might that user have accidentally discovered in that application?",
    choices: ["Poison apple", "Shoulder surfing", "Smurfing", "Buffer overflow"],
    correctAnswer: 3,
    explanation:
      "Buffer overflow occurs when more data is written to a buffer than it can hold. Pasting an entire paragraph into a small input field can exceed the buffer's allocated size, causing the application to crash. This is a classic symptom of a buffer overflow vulnerability.",
    wrongExplanations: {
      0: "Poison apple is not a recognized security vulnerability or attack type. The crash was caused by excessive input data overflowing a fixed-size buffer, which is characteristic of a buffer overflow.",
      1: "Shoulder surfing is a social engineering technique where an attacker observes someone's screen or keyboard to steal information. It does not involve application crashes from excess input data.",
      2: "Smurfing (Smurf attack) is a distributed denial-of-service attack that floods a target with ICMP echo requests using broadcast addresses. It is a network-level attack and has nothing to do with application input fields crashing.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo2",
    question:
      "Which of the following attacks is a form of software exploitation that transmits or submits a longer stream of data than the input variable is designed to handle?",
    choices: [
      "Time-of-check to time-of-use attack",
      "Data diddling",
      "Smurf attack",
      "Buffer overflow attack",
    ],
    correctAnswer: 3,
    explanation:
      "A buffer overflow attack occurs when a program receives more data than its buffer is designed to hold. The excess data overflows into adjacent memory, potentially overwriting critical data or injecting malicious code.",
    wrongExplanations: {
      0: "A time-of-check to time-of-use (TOCTOU) attack exploits the race condition between when a resource is checked and when it is used. It does not involve sending oversized data to an input variable.",
      1: "Data diddling involves unauthorized modification of data before or during input into a computer system, such as altering transaction values. It is not about overwhelming an input variable with excess data.",
      2: "A Smurf attack is a network-layer DDoS attack that uses spoofed ICMP packets sent to a broadcast address to flood a target. It does not exploit software input variables with oversized data.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo3",
    question:
      "A buffer overflow occurs when a process attempts to store data beyond the limits of a fixed-sized buffer. Where can the targeted buffer be located?",
    choices: [
      "Only on the stack",
      "Only in the heap",
      "On the stack, in the heap, or in the data section of the process",
      "Only in CPU registers",
    ],
    correctAnswer: 2,
    explanation:
      "Buffers can exist in any writable memory region of a process. Stack buffers hold local variables, heap buffers are dynamically allocated, and global/static buffers reside in the data section. Buffer overflows can target any of these locations.",
    wrongExplanations: {
      0: "While stack-based buffer overflows are the most commonly discussed type, buffers also exist on the heap (dynamically allocated memory) and in the global/static data section. All of these are potential targets.",
      1: "Heap overflows are a real attack vector, but buffers are not limited to the heap. Stack-based local variable buffers and global data section buffers are equally valid targets for overflow attacks.",
      3: "CPU registers are not memory buffers in the traditional sense. They are small, fixed-size storage locations in the processor. Buffers that can be overflowed reside in the process's memory space: the stack, heap, or data section.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo4",
    question:
      "Which of the following is NOT a potential consequence of a buffer overflow?",
    choices: [
      "Corruption of program data",
      "Unexpected transfer of control",
      "Memory access violations",
      "Increased network bandwidth",
    ],
    correctAnswer: 3,
    explanation:
      "Increased network bandwidth is not a consequence of a buffer overflow. Buffer overflows affect process memory and execution, leading to data corruption, altered control flow, or crashes — not improvements to network performance.",
    wrongExplanations: {
      0: "Corruption of program data is a direct consequence of buffer overflow. When data spills past a buffer's boundary, it overwrites adjacent memory that may contain other program variables or critical data structures.",
      1: "Unexpected transfer of control is a key consequence of buffer overflow. By overwriting the return address on the stack or function pointers, an attacker can redirect execution to arbitrary code, including injected shellcode.",
      2: "Memory access violations (segmentation faults) commonly result from buffer overflows. When overwritten pointers or return addresses reference invalid memory locations, the operating system terminates the process.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo5",
    question:
      "Which type of buffer overflow was first widely used by the Morris Worm in 1988?",
    choices: [
      "Heap overflow",
      "Global data overflow",
      "Stack buffer overflow",
      "Integer overflow",
    ],
    correctAnswer: 2,
    explanation:
      "The Morris Worm of 1988 is one of the earliest well-known exploits to use a stack buffer overflow. It exploited the gets() function in the fingerd network service on Unix systems to overflow a stack buffer and execute arbitrary code.",
    wrongExplanations: {
      0: "Heap overflows target dynamically allocated memory and became more prominent in later years. The Morris Worm specifically exploited a stack buffer overflow in the fingerd service's use of the gets() function.",
      1: "Global data overflows target statically allocated buffers in the data section. The Morris Worm's exploit involved overflowing a local stack buffer, not a global data buffer.",
      3: "Integer overflows involve arithmetic errors that cause values to wrap around, potentially leading to undersized buffer allocations. The Morris Worm directly exploited a stack buffer overflow, not an integer overflow.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo6",
    question:
      "Which of the following C standard library functions is considered UNSAFE because it performs no bounds checking on input?",
    choices: ["fgets()", "gets()", "strncpy()", "snprintf()"],
    correctAnswer: 1,
    explanation:
      "gets() reads input from stdin into a buffer with no way to specify a maximum length, making it impossible to prevent buffer overflows. It has been removed from the C11 standard due to its inherent danger.",
    wrongExplanations: {
      0: "fgets() is a safe alternative to gets() because it accepts a maximum length parameter, ensuring that no more than the specified number of characters are read into the buffer.",
      2: "strncpy() is a bounded version of strcpy() that accepts a maximum number of characters to copy. While it has its own quirks (like not guaranteeing null termination), it does perform bounds checking.",
      3: "snprintf() is a safe alternative to sprintf() that accepts a maximum buffer size parameter, preventing writes beyond the allocated buffer. It always null-terminates the output.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo7",
    question:
      "What are the two broad categories of buffer overflow defenses?",
    choices: [
      "Hardware and software defenses",
      "Compile-time and run-time defenses",
      "Network and host-based defenses",
      "Active and passive defenses",
    ],
    correctAnswer: 1,
    explanation:
      "Buffer overflow defenses are broadly categorized into compile-time defenses (applied when code is compiled, such as safe library functions and stack canaries) and run-time defenses (enforced during execution, such as ASLR and non-executable memory).",
    wrongExplanations: {
      0: "While some defenses involve hardware support (e.g., NX bit), the standard classification for buffer overflow defenses in security literature is compile-time vs. run-time, not hardware vs. software.",
      2: "Network and host-based defenses are categories used for intrusion detection systems, not buffer overflow defenses. Buffer overflow defenses operate at the compile-time and run-time levels of the software lifecycle.",
      3: "Active and passive defenses are general security terms not specific to buffer overflow mitigation. The accepted categorization is compile-time defenses (e.g., safe languages, stack protection) and run-time defenses (e.g., ASLR, guard pages).",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo8",
    question:
      "Which run-time defense manipulates the location of key data structures like the stack and heap using random shifts for each process?",
    choices: [
      "Stack canaries",
      "Guard pages",
      "Address Space Layout Randomization (ASLR)",
      "Non-executable stack",
    ],
    correctAnswer: 2,
    explanation:
      "Address Space Layout Randomization (ASLR) randomizes the memory addresses of key data areas such as the stack, heap, and libraries each time a process is loaded. This makes it extremely difficult for an attacker to predict target addresses for exploitation.",
    wrongExplanations: {
      0: "Stack canaries are a compile-time defense that places a known value between the buffer and control data (like the return address) on the stack. They detect overwrites but do not randomize memory layout.",
      1: "Guard pages are unmapped memory pages placed between memory regions. Accessing a guard page triggers a hardware fault, catching some overflows. However, they do not randomize the location of data structures.",
      3: "A non-executable stack marks the stack memory region as non-executable, preventing the processor from running code placed on the stack. It does not randomize the locations of data structures in memory.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo9",
    question:
      "In a stack buffer overflow attack, what critical piece of data does the attacker typically try to overwrite?",
    choices: [
      "The loop counter variable",
      "The function's return address",
      "The program's main() function",
      "The operating system kernel",
    ],
    correctAnswer: 1,
    explanation:
      "In a stack buffer overflow, the attacker overflows a local buffer to overwrite the function's saved return address on the stack. When the function returns, execution jumps to the attacker-controlled address, typically pointing to injected shellcode or a ROP gadget chain.",
    wrongExplanations: {
      0: "While overwriting a loop counter could cause unintended behavior, it is not the primary target of a stack buffer overflow attack. The return address is far more valuable because it gives the attacker direct control over the program's execution flow.",
      2: "The main() function's code resides in the text segment, which is typically read-only and not adjacent to stack buffers. Attackers target the return address stored on the stack, not the function code itself.",
      3: "The operating system kernel runs in a separate, protected memory space that is not directly accessible by overflowing a user-space stack buffer. The attacker targets the process's own return address on the stack.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo10",
    question:
      "What is shellcode in the context of buffer overflow attacks?",
    choices: [
      "A script that opens a terminal window",
      "Code supplied by the attacker, often saved in the buffer being overflowed, that is executed after the overflow",
      "A type of antivirus signature",
      "Code used to encrypt network traffic",
    ],
    correctAnswer: 1,
    explanation:
      "Shellcode is machine-level code crafted by the attacker and placed into the overflowed buffer (or nearby memory). After the overflow redirects execution — typically by overwriting the return address — the processor executes this shellcode, which often spawns a command shell or performs other malicious actions.",
    wrongExplanations: {
      0: "While shellcode historically got its name from spawning a shell, it is not simply a script that opens a terminal. It is raw machine code injected into memory via a buffer overflow that executes with the privileges of the exploited process.",
      2: "Antivirus signatures are patterns used to identify known malware. Shellcode is the opposite — it is attacker-supplied machine code injected through a buffer overflow vulnerability to gain unauthorized control of a system.",
      3: "Shellcode has nothing to do with encrypting network traffic. It is attacker-crafted executable code that is injected into a vulnerable process's memory and executed after a buffer overflow redirects program control flow.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo11",
    question:
      "Which compile-time defense adds function entry and exit code to check the stack for signs of corruption using a random canary value?",
    choices: [
      "ASLR",
      "Guard pages",
      "Stack protection / Stack canary",
      "Non-executable memory",
    ],
    correctAnswer: 2,
    explanation:
      "Stack protection (also called stack canary or stack-smashing protection) is a compile-time defense that inserts a random canary value between local buffers and the saved return address. On function exit, the canary is checked — if it has been modified, a buffer overflow is detected and the program is terminated.",
    wrongExplanations: {
      0: "ASLR (Address Space Layout Randomization) is a run-time defense that randomizes the memory layout of a process. It does not insert canary values or add function entry/exit checks at compile time.",
      1: "Guard pages are a run-time memory protection mechanism that places unmapped pages between memory regions. They do not involve compile-time instrumentation of functions with canary values.",
      3: "Non-executable memory (such as the NX bit or W^X policy) marks memory regions as non-executable to prevent code injection. It is a run-time/hardware defense and does not use canary values to detect stack corruption.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "bo12",
    question:
      "What is the primary difference between a stack overflow and a heap overflow?",
    choices: [
      "Stack overflows are more dangerous than heap overflows",
      "Stack overflows target the return address while heap overflows may target function pointers in dynamic data structures",
      "Heap overflows can only occur in Java programs",
      "There is no practical difference between them",
    ],
    correctAnswer: 1,
    explanation:
      "Stack overflows exploit the predictable layout of stack frames to overwrite the saved return address, hijacking control flow when the function returns. Heap overflows target dynamically allocated memory and may overwrite function pointers, management metadata, or adjacent objects in the heap to achieve exploitation.",
    wrongExplanations: {
      0: "Neither type is inherently more dangerous than the other. Both can lead to arbitrary code execution. The difference lies in what they target: stack overflows target return addresses on the stack, while heap overflows target function pointers and management data in dynamically allocated memory.",
      2: "Heap overflows can occur in any language that uses dynamic memory allocation without proper bounds checking, including C and C++. Java's memory safety features generally prevent heap overflows, making this statement incorrect.",
      3: "There are significant practical differences. Stack overflows exploit the call stack's return addresses for immediate control flow hijacking, while heap overflows exploit dynamically allocated memory structures and often require more sophisticated techniques to achieve code execution.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
];

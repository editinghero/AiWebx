import { AiWebsite, CategoryInfo } from "@/types";

export const aiCategories: CategoryInfo[] = [
  {
    id: "all-in-one",
    name: "All-in-One Models",
    description: "Comprehensive AI platforms with multiple capabilities",
    icon: "layers",
  },
  {
    id: "image-generation",
    name: "Image Generation",
    description: "Create stunning images from text descriptions",
    icon: "image",
  },
  {
    id: "video-generation",
    name: "Video Generation",
    description: "Transform ideas into captivating videos",
    icon: "video",
  },
  {
    id: "text-generation",
    name: "Text Generation",
    description: "Write content with AI assistance",
    icon: "file-text",
  },
  {
    id: "code-generation",
    name: "Code Generation",
    description: "Build software with AI assistance",
    icon: "code",
  },
  {
    id: "presentation",
    name: "Presentation Tools",
    description: "Create stunning presentations with AI",
    icon: "presentation",
  },
  {
    id: "personal-assistant",
    name: "Personal Assistants",
    description: "AI helpers for everyday tasks",
    icon: "bot",
  },
  {
    id: "website-builder",
    name: "Website Builders",
    description: "Design websites with AI assistance",
    icon: "layout",
  },
  {
    id: "audio-generation",
    name: "Audio Generation",
    description: "Generate voices, music, and sound effects",
    icon: "music",
  },
  {
    id: "other",
    name: "Other Tools",
    description: "Specialized AI tools for various purposes",
    icon: "tool",
  },
];

export const aiWebsites: AiWebsite[] = [
  // All-in-One Models
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Advanced language model by OpenAI with chat interface",
     
    url: "https://chat.openai.com/",
    category: "all-in-one",
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's helpful, harmless, and honest AI assistant",
     
    url: "https://claude.ai/",
    category: "all-in-one",
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Google's most capable and general model",
     
    url: "https://gemini.google.com/",
    category: "all-in-one",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI search engine with real-time information",
     
    url: "https://www.perplexity.ai/",
    category: "all-in-one",
  },
  {
    id: "grok",
    name: "Grok",
    description: "xAI's conversational AI with real-time web access",
     
    url: "https://grok.x.ai/",
    category: "all-in-one",
  },
  {
    id: "llama",
    name: "Llama 3",
    description: "Meta's advanced open-source large language model",
     
    url: "https://llama.meta.com/",
    category: "all-in-one",
  },
  {
    id: "poe",
    name: "Poe",
    description: "Platform with access to multiple AI chatbots",
     
    url: "https://poe.com/",
    category: "all-in-one",
  },
  {
    id: "huggingchat",
    name: "HuggingChat",
    description: "Free AI chat powered by open-source models",
     
    url: "https://huggingface.co/chat/",
    category: "all-in-one",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "Advanced AI assistant with specialized knowledge areas",
   
    url: "https://chat.deepseek.com/",
    category: "all-in-one",
  },
  
  // Image Generation
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Generate detailed images from text prompts",
     
    url: "https://www.midjourney.com/",
    category: "image-generation",
  },
  {
    id: "dalle",
    name: "DALL-E",
    description: "OpenAI's text-to-image generator",
     
    url: "https://openai.com/dall-e/",
    category: "image-generation",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "Open-source text-to-image model",
     
    url: "https://stability.ai/",
    category: "image-generation",
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    description: "Adobe's creative generative AI image creator",
     
    url: "https://firefly.adobe.com/",
    category: "image-generation",
  },
  {
    id: "getimg",
    name: "GetImg.ai",
    description: "Generate and edit images with AI",
     
    url: "https://getimg.ai/",
    category: "image-generation",
  },
  {
    id: "imagine",
    name: "Imagine by Magic Studio",
    description: "Create photorealistic AI images",
     
    url: "https://imagine.art/",
    category: "image-generation",
  },
  {
    id: "leonardo",
    name: "Leonardo.ai",
    description: "Create production-quality assets for creative projects",
     
    url: "https://leonardo.ai/",
    category: "image-generation",
  },
  {
    id: "gpt-image-1",
    name: "GPT-Image-1",
    description: "AI image creation for stunning visuals from text descriptions",
     
    url: "https://gpt-image-1.org/",
    category: "image-generation",
  },
  {
    id: "flux",
    name: "Flux.1",
    description: "Advanced text-to-image model with fine-tuned control",
     
    url: "https://flux.ai/",
    category: "image-generation",
  },
  
  // Additional Image Generation Tools
  {
    id: "img2img",
    name: "Img2Img",
    description: "Transform and refine existing images with AI assistance",
    url: "https://img2img.app/",
    category: "image-generation",
  },
  {
    id: "artbreeder",
    name: "Artbreeder",
    description: "Create and evolve images through collaborative breeding",
    url: "https://www.artbreeder.com/",
    category: "image-generation",
  },
  {
    id: "dreamstudio",
    name: "DreamStudio",
    description: "Create stunning visuals with Stability AI's official interface",
    url: "https://dreamstudio.ai/",
    category: "image-generation",
  },
  
  // Video Generation
  {
    id: "runway",
    name: "Runway",
    description: "AI-powered creative tools for video generation",
     
    url: "https://runwayml.com/",
    category: "video-generation",
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description: "Create AI videos with virtual presenters",
     
    url: "https://www.synthesia.io/",
    category: "video-generation",
  },
  {
    id: "gen-2",
    name: "Gen-2",
    description: "Runway's next-gen AI video model",
     
    url: "https://research.runwayml.com/gen2",
    category: "video-generation",
  },
  {
    id: "pika",
    name: "Pika",
    description: "Create and edit videos with AI",
     
    url: "https://pika.art/",
    category: "video-generation",
  },
  {
    id: "sora",
    name: "Sora",
    description: "OpenAI's text-to-video model",
     
    url: "https://openai.com/sora/",
    category: "video-generation",
  },
  {
    id: "heygen",
    name: "HeyGen",
    description: "AI video generation platform for creating talking avatar videos",
     
    url: "https://www.heygen.com/",
    category: "video-generation",
  },
  {
    id: "elai",
    name: "Elai.io",
    description: "Create AI videos from just text",
     
    url: "https://elai.io/",
    category: "video-generation",
  },
  {
    id: "dream-machine",
    name: "Dream Machine",
    description: "Luma Labs' text-to-video model with realistic motion",
     
    url: "https://lumalabs.ai/dream-machine",
    category: "video-generation",
  },
  {
    id: "hunyuan-video",
    name: "Hunyuan Video",
    description: "High-quality open-source text-to-video model by Tencent",
     
    url: "https://hunyuanvideo.online/",
    category: "video-generation",
  },
  {
    id: "wan-ai",
    name: "Wan AI",
    description: "Advanced video generation with VACE technology",
     
    url: "https://www.wan-ai.org/",
    category: "video-generation",
  },
  {
    id: "descript",
    name: "Descript",
    description: "AI-powered video and podcast editing platform",
    url: "https://www.descript.com/",
    category: "video-generation",
  },
  {
    id: "kapwing",
    name: "Kapwing",
    description: "Online video editor with AI-powered tools",
    url: "https://www.kapwing.com/",
    category: "video-generation",
  },
  
  // Code Generation
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer powered by OpenAI Codex",
     
    url: "https://github.com/features/copilot",
    category: "code-generation",
  },
  {
    id: "replit-ghostwriter",
    name: "Replit Ghostwriter",
    description: "AI-powered code completion and generation",
     
    url: "https://replit.com/site/ghostwriter",
    category: "code-generation",
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor built on VSCode",
     
    url: "https://cursor.sh/",
    category: "code-generation",
  },
  {
    id: "codeium",
    name: "Codeium",
    description: "Free AI-powered code completion and chat",
     
    url: "https://codeium.com/",
    category: "code-generation",
  },
  {
    id: "tabnine",
    name: "Tabnine",
    description: "AI code completion assistant",
     
    url: "https://www.tabnine.com/",
    category: "code-generation",
  },
  {
    id: "amazon-codewhisperer",
    name: "Amazon CodeWhisperer",
    description: "ML-powered coding companion by AWS",
     
    url: "https://aws.amazon.com/codewhisperer/",
    category: "code-generation",
  },
  {
    id: "codium",
    name: "Codium",
    description: "AI code reviews and automatic fixes for your codebase",
    url: "https://www.codium.ai/",
    category: "code-generation",
  },
  {
    id: "aider",
    name: "Aider",
    description: "AI pair programmer that edits code on your behalf in the terminal",
    url: "https://aider.chat/",
    category: "code-generation",
  },
  
  // Presentation
  {
    id: "beautiful",
    name: "Beautiful.ai",
    description: "AI-powered presentation software",
     
    url: "https://www.beautiful.ai/",
    category: "presentation",
  },
  {
    id: "gamma",
    name: "Gamma",
    description: "Create beautiful presentations from simple text",
     
    url: "https://gamma.app/",
    category: "presentation",
  },
  {
    id: "tome",
    name: "Tome",
    description: "AI-powered storytelling format for work",
     
    url: "https://tome.app/",
    category: "presentation",
  },
  {
    id: "slideai",
    name: "Slide AI",
    description: "Create presentation slides with AI",
     
    url: "https://www.slideai.io/",
    category: "presentation",
  },
  {
    id: "presentations",
    name: "Presentations.AI",
    description: "Professional slides in seconds with AI",
     
    url: "https://www.presentations.ai/",
    category: "presentation",
  },
  {
    id: "pitch",
    name: "Pitch",
    description: "Collaborative presentation software with AI assistance",
    url: "https://pitch.com/",
    category: "presentation",
  },
  
  // Website Builders
  {
    id: "framer-ai",
    name: "Framer AI",
    description: "Design websites using AI",
     
    url: "https://www.framer.com/ai/",
    category: "website-builder",
  },
  {
    id: "webflow-ai",
    name: "Webflow AI",
    description: "Build websites faster with AI assistance",
     
    url: "https://webflow.com/ai",
    category: "website-builder",
  },
  {
    id: "relume",
    name: "Relume",
    description: "AI website builder for designers",
     
    url: "https://www.relume.io/",
    category: "website-builder",
  },
  {
    id: "10web",
    name: "10Web",
    description: "AI Website Builder for WordPress",
     
    url: "https://10web.io/",
    category: "website-builder",
  },
  {
    id: "durable",
    name: "Durable",
    description: "AI website builder for small businesses",
     
    url: "https://durable.co/",
    category: "website-builder",
  },
  {
    id: "wix-ai",
    name: "Wix ADI",
    description: "Wix Artificial Design Intelligence",
     
    url: "https://www.wix.com/adi/",
    category: "website-builder",
  },
  {
    id: "dopple",
    name: "Dopple",
    description: "AI-powered design-to-code conversion for websites",
    url: "https://www.dopple.ai/",
    category: "website-builder",
  },
  {
    id: "v0",
    name: "V0",
    description: "Turn your designs into code automatically with AI",
    url: "https://v0.dev/",
    category: "website-builder",
  },
  
  // Personal Assistants
  {
    id: "pi",
    name: "Pi",
    description: "Personal AI assistant by Inflection AI",
     
    url: "https://pi.ai/",
    category: "personal-assistant",
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    description: "AI-powered chat and assistant from Microsoft",
     
    url: "https://copilot.microsoft.com/",
    category: "personal-assistant",
  },
  {
    id: "woebot",
    name: "Woebot",
    description: "Mental health chatbot using CBT techniques",
     
    url: "https://woebothealth.com/",
    category: "personal-assistant",
  },
  {
    id: "replika",
    name: "Replika",
    description: "AI companion designed to care",
     
    url: "https://replika.com/",
    category: "personal-assistant",
  },
  {
    id: "siri",
    name: "Siri",
    description: "Apple's virtual assistant",
     
    url: "https://www.apple.com/siri/",
    category: "personal-assistant",
  },
  {
    id: "alexa",
    name: "Amazon Alexa",
    description: "Amazon's cloud-based voice service",
     
    url: "https://developer.amazon.com/en-US/alexa",
    category: "personal-assistant",
  },
  {
    id: "heycharlie",
    name: "Hey Charlie",
    description: "Personalized AI assistant focused on productivity",
    url: "https://www.heycharlie.co/",
    category: "personal-assistant",
  },
  
  // Text Generation
  {
    id: "jasper",
    name: "Jasper",
    description: "AI writing assistant for marketing content",
     
    url: "https://www.jasper.ai/",
    category: "text-generation",
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description: "Generate marketing copy with AI",
     
    url: "https://www.copy.ai/",
    category: "text-generation",
  },
  {
    id: "writesonic",
    name: "Writesonic",
    description: "AI writer that creates SEO-optimized content",
     
    url: "https://writesonic.com/",
    category: "text-generation",
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "Writing assistant with grammar and style suggestions",
     
    url: "https://www.grammarly.com/",
    category: "text-generation",
  },
  {
    id: "rytr",
    name: "Rytr",
    description: "AI writing assistant for affordable content",
     
    url: "https://rytr.me/",
    category: "text-generation",
  },
  {
    id: "wordtune",
    name: "Wordtune",
    description: "AI writing companion that rewrites and rephrases",
     
    url: "https://www.wordtune.com/",
    category: "text-generation",
  },
  {
    id: "quillbot",
    name: "QuillBot",
    description: "AI-powered paraphrasing tool",
     
    url: "https://quillbot.com/",
    category: "text-generation",
  },
  {
    id: "wordai",
    name: "WordAI",
    description: "Rewrites content to be unique and readable with AI",
    url: "https://wordai.com/",
    category: "text-generation",
  },
  {
    id: "sudowrite",
    name: "Sudowrite",
    description: "Creative AI writing assistant for fiction authors",
    url: "https://www.sudowrite.com/",
    category: "text-generation",
  },
  
  // Audio Generation
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "AI voice generator and voice cloning",
     
    url: "https://elevenlabs.io/",
    category: "audio-generation",
  },
  {
    id: "soundraw",
    name: "Soundraw",
    description: "AI music generator for creators",
     
    url: "https://soundraw.io/",
    category: "audio-generation",
  },
  {
    id: "mubert",
    name: "Mubert",
    description: "Royalty-free AI-generated music",
     
    url: "https://mubert.com/",
    category: "audio-generation",
  },
  {
    id: "riffusion",
    name: "Riffusion",
    description: "Stable Diffusion for real-time music generation",
     
    url: "https://www.riffusion.com/",
    category: "audio-generation",
  },
  {
    id: "play",
    name: "Play.ht",
    description: "AI text to voice generator & realistic AI voices",
     
    url: "https://play.ht/",
    category: "audio-generation",
  },
  {
    id: "resemble",
    name: "Resemble AI",
    description: "AI voice generator and voice cloning",
     
    url: "https://www.resemble.ai/",
    category: "audio-generation",
  },
  {
    id: "aiva",
    name: "AIVA",
    description: "Artificial Intelligence Virtual Artist for music composition",
     
    url: "https://www.aiva.ai/",
    category: "audio-generation",
  },
  {
    id: "suno",
    name: "Suno AI",
    description: "Create original songs with AI in seconds",
     
    url: "https://suno.ai/",
    category: "audio-generation",
  },
  {
    id: "udio",
    name: "Udio",
    description: "AI music generation platform with quality controls",
     
    url: "https://www.udio.com/",
    category: "audio-generation",
  },
  {
    id: "beatoven",
    name: "Beatoven.ai",
    description: "Create customizable royalty-free music with AI",
    url: "https://www.beatoven.ai/",
    category: "audio-generation",
  },
  {
    id: "boomy",
    name: "Boomy",
    description: "Create original songs in seconds, even without experience",
    url: "https://boomy.com/",
    category: "audio-generation",
  },
  
  // Other Tools
  {
    id: "zapier",
    name: "Zapier AI",
    description: "AI assistant for workflow automation",
     
    url: "https://zapier.com/ai",
    category: "other",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI writing assistant integrated with Notion",
     
    url: "https://www.notion.so/product/ai",
    category: "other",
  },
  {
    id: "krisp",
    name: "Krisp",
    description: "AI-powered noise cancellation for calls",
     
    url: "https://krisp.ai/",
    category: "other",
  },
  {
    id: "studio-d-id",
    name: "D-ID",
    description: "Create talking avatars from images",
     
    url: "https://www.d-id.com/",
    category: "other",
  },
  {
    id: "lensa",
    name: "Lensa AI",
    description: "Photo and video editing with AI",
     
    url: "https://prisma-ai.com/lensa",
    category: "other",
  },
]; 
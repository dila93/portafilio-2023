import linkedinImg from "../../../img/social/linkedin.png";
import mediumImg from "../../../img/social/medium.png";
import githubImg from "../../../img/social/github.png";
import hackerrankImg from "../../../img/social/hackerrank.png";
import sebastianardilaImg from "../../../img/social/sebastianardila.png";

const useSocial = () => {

    const socialContent = [
        {
            social: {
                img: linkedinImg,
                name: "LinkedIn",
                description: "Explore my journey and accomplishments as a Software Engineer on my LinkedIn profile.",
                url: "linkedin.com/in/sebastian-ardila/",
                hover: "#4eb3dea3",
            }
        },
        {
            social: {
                img: mediumImg,
                name: "Medium",
                description: "Check out my Medium profile where I share insights and articles on technology and innovation.",
                url: "medium.com/@sebastian-ardila",
                hover: "#8de0a6",
            }
        },
        {
            social: {
                img: githubImg,
                name: "GitHub",
                description: "Review my contributions and projects on GitHub, showcasing my involvement in the open-source community.",
                url: "github.com/sebastian-ardila",
                hover: "#fcf09f",
            }
        },
        {
            social: {
                img: hackerrankImg,
                name: "Hackerrank",
                description: "Take a look at my Hackerrank profile to see how I tackle various programming challenges and hone my technical skills.",
                url: "hackerrank.com/sebastianardila",
                hover: "#f27c7cb5",
            }
        },
        {
            social: {
                img: sebastianardilaImg,
                name: "GPT Sebastian Ardila",
                description: "Talk with the Chat GPT of myself, come on ask me questions!",
                url: "chat.openai.com/g/g-faGTBT7sT-sebastian-ardila",
                hover: "#33dd016e",
            }
        }
    ];

    return {
        socialContent
    }
}

export default useSocial;
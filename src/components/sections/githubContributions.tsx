import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import GitHubCalendar from "react-github-calendar";

const GithubContributions = () => {
     return (
          <Container id="testimonials" className="bg-gray-50">
               <div className="flex flex-col items-center gap-4">
                    <Typography
                         variant="subtitle"
                         className="max-w-xl text-center"
                    >
                         Days i code:
                    </Typography>
                    <GitHubCalendar username="Sreesanjay" />
               </div>
          </Container>
     );
};

export default GithubContributions;

import Link from 'next/link'; // Import the Link component
import { Button } from "@/components/ui/button";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create"> {/* Use Link component properly */}
        <Button>
          New Course
        </Button>
      </Link>
    </div>
  );
}

export default CoursesPage;

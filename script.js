import java.util.Scanner;

public class GradeCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Grade Calculator");

        // Prompt the user for the number of courses
        System.out.print("Enter the number of courses: ");
        int numberOfCourses = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        double totalWeightedGrade = 0.0;
        int totalECTS = 0;

        // Loop to get input for each course
        for (int i = 1; i <= numberOfCourses; i++) {
            System.out.println("\nCourse " + i + ":");

            // Prompt the user for the course name
            System.out.print("Enter the name of this course: ");
            String courseName = scanner.nextLine();

            // Prompt the user for grade and ECTS
            System.out.print("Enter your grade for this course: ");
            double grade = scanner.nextDouble();
            scanner.nextLine(); // Consume the newline character

            System.out.print("Enter the ECTS credits for this course: ");
            int ects = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            // Calculate the weighted grade for this course
            double weightedGrade = grade * ects;

            // Add the weighted grade to the total
            totalWeightedGrade += weightedGrade;

            // Add the ECTS for this course to the total
            totalECTS += ects;

            // Display the details for each course
            System.out.printf("Course: %-20s Grade: %-5.2f ECTS: %d%n", courseName, grade, ects);
        }

        // Calculate the average grade
        double averageGrade = totalWeightedGrade / totalECTS;

        // Display the result
        System.out.printf("%nAverage Grade: %.2f%n", averageGrade);

        // Close the scanner
        scanner.close();
    }
}

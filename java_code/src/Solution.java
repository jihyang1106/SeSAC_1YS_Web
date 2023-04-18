import java.util.*;
public class Solution {
    public static String[] solution(String[] companies, String[] applicants) {
        String[] answer = {};

        List<Company> companiesList = new ArrayList<>();
        List<Applicant> applicantsList = new ArrayList<>();


        // 기업 정보 입력
        for(int i=0;i<companies.length;i++) {
            String[] tempArr = companies[i].split(" ");
            String name = tempArr[0];
            List<String> preferApplicants = Arrays.asList(tempArr[1].split(""));
            int availableCount = Integer.parseInt(tempArr[2]);
            ArrayList<String> space = new ArrayList<>();
            companiesList.add(new Company(name, preferApplicants, availableCount , space));
        }
        // 지원자 정보 입력
        for(int i=0;i<applicants.length;i++) {
            String[] tempArr = applicants[i].split(" ");
            String name = tempArr[0];
            List<String> preferCompanies = Arrays.asList(tempArr[1].split(""));
            int availableCount = Integer.parseInt(tempArr[2]);
            applicantsList.add(new Applicant(name, preferCompanies, availableCount));
        }

        // 기업 별 지원자 맵
        HashMap<String, List<String>> hashMap = new HashMap<>();
        List<String> matchingList = new ArrayList<>();

        /*이 알고리즘을 재귀적으로 작성해야 함*/
        for(Applicant applicant : applicantsList) {
            for(Company company : companiesList) {
                // 지원자가 선호하는 기업이 일치할 때
                if(applicant.preferCompanies.get(0).equals(company.name)) {
                    company.applicants.add(applicant.name);
                    hashMap.put(company.name, company.applicants);
                }
            }
        }

        int i = 0;
        // 채용하고자 하는 인원수보다 더 클 때
        for(Company company : companiesList) {
            if(company.availableCount < company.applicants.size()) {
                System.out.println(company.applicants);
                System.out.println(company.preferApplicants.get(i));
//                System.out.println(company.name);
            }
            i++;
        }

//        for(Map.Entry<String, List<String>> map : hashMap.entrySet()) {
//            System.out.println(map);
//        }



        return answer;
    }
    public static void main(String[] args) {
        String[] companies = {"A fabdec 2", "B cebdfa 2", "C ecfadb 2"};
        String[] applicants = {"a BAC 1", "b BAC 3", "c BCA 2", "d ABC 3", "e BCA 3", "f ABC 2"};

        solution(companies, applicants);
        // companies ["A fabdec 2", "B cebdfa 2", "C ecfadb 2"]
        // applicants ["a BAC 1", "b BAC 3", "c BCA 2", "d ABC 3", "e BCA 3", "f ABC 2"]
        // result ["A_bf", "B_ce", "C_d"]

        // companies ["A abc 2", "B abc 1"]
        // applicants ["a AB 1", "b AB 1", "c AB 1"]
        // result ["A_ab", "B_"]
    }

    public static class Company {
        String name;
        List<String> preferApplicants;
        int availableCount;
        List<String> applicants;

        public Company(String name, List<String> preferApplicants, int availableCount, List<String> applicants) {
            this.name = name;
            this.preferApplicants = preferApplicants;
            this.availableCount = availableCount;
            this.applicants = applicants;
        }

    }

    public static class Applicant {
        String name;
        List<String> preferCompanies;
        int applyCount;

        public Applicant(String name, List<String> preferCompanies, int applyCount) {
            this.name = name;
            this.preferCompanies = preferCompanies;
            this.applyCount = applyCount;
        }
    }
}
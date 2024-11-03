// 재귀 사용

/************************************************************************************************************
There is the FSM (Finite State Machine) that handles the following steps. A sentence is given and a set of words is extracted from the sentence. Words are separated by spaces. Extracted words are used for the input characters in this FSM consecutively. The characters that consist of a word, called CRAZY, look like this:
[1] The first character is 'C'
[2] If a CRAZY word consists of 2 characters, the second character must be 'Z'
[3] If the length of a CRAZY word is not 2, the CRAZY word will be one of the following ones:
- 'C' + 'K' + CRAZY Word + 'L'
- 'C' + 'G' + 'O' + (optionally multiple O's) + 'D' + 'L'
If a word does not satisfy Steps [1] through [3]. '0' is printed.

************************************************************************************************************

다음 단계를 처리하는 FSM(Finite State Machine)이 있습니다. 문장이 주어지고 문장에서 단어 집합이 추출됩니다. 단어는 공백으로 구분됩니다. 추출된 단어는 이 FSM의 입력 문자에 연속적으로 사용됩니다. CRAZY라는 단어를 구성하는 문자는 다음과 같습니다.
[1] 첫 번째 문자는 'C'입니다.
[2] CRAZY 단어가 2개의 문자로 구성된 경우 두 번째 문자는 'Z'여야 합니다.
[3] CRAZY 단어의 길이가 2가 아닌 경우 CRAZY 단어는 다음 중 하나입니다.
- 'C' + 'K' + CRAZY 단어 + 'L'
- 'C' + 'G' + 'O' + (선택적으로 여러 개의 O) + 'D' + 'L'
단어가 [1]~[3] 단계를 충족하지 않는 경우 '0'이 출력됩니다.
************************************************************************************************************/

// 정답
// 11001000000100000000

/*
예를 들어서 CKCKCZLL를 생각해보면.... CK + CKCZL + L로 분리해서 생각해볼게요. 저는 중간 단어 CKCZL이 조건3을 만족해서 CRAZY word라고 생각했는데, 그게 아니고 CRAZY Word는 C, R, A, Z, Y만 있어야 하기 때문에 L이 껴 있다는 이유로 0이 나온다고 해요.
 */

public class Main {
    public static int isCrazy(String word) {
        // if (word.length() == 1 && word.equals("C")) {
        //     return 1;
        // } else if (word.length() == 2 && word.equals("CZ")) {
        //     return 1;
        // } else if (word.length() >= 3 && word.startsWith("CK") && word.endsWith("L")) {
        //     return isCrazy(word.substring(2, word.length() - 1));
        // } else if (word.startsWith("CGO") && word.endsWith("DL")) {
        //     String mid = word.substring(3, word.length() - 2);
        //     if (mid.isEmpty() || mid.matches("O+")) {
        //         return 1;
        //     }
        // }
        // return 0;



		final int CRAZY_CORRECT = 1;
		final int CRAZY_INCORRECT = 0;

		if(word.length() < 1)
		{
			// 빈 문자열인 경우엔 어떻게 처리해야 하나?
			return CRAZY_INCORRECT;
		}
		else if (word.length() == 2 && word.equals("CZ"/* 2군데 이상에서 "CZ" 사용 될 경우 final 변수로 분리 할 것 */))
		{
			return CRAZY_CORRECT;
		}
		else if( word.length() >= 3)
		{
			// 'C' + 'K' + CRAZY Word + 'L'
			if(word.startsWith("CK") && word.endsWith("L"))
			{
				// TODO: CKL을 제외하고 CRAZY Word로만 이뤄져 있는지 검사.
			}
			// 'C' + 'G' + 'O' + (optionally multiple O's) + 'D' + 'L'
			else if(word.startsWith("CGO") && word.endsWith("DL"))
			{
				// TODO: CGODL을 제외하고 optionally multiple O's로만 이뤄져 있는지 검사.
			}
		}

		return 0;
    }

    public static void main(String[] args) {
		//	1	CZ
		//	1	CKCZL
		//	0	CKCKCZLL
		//	0	CGOGL
		//	1	CZ
		//	0	CKCZLL
		//	0	CKCKCZLL
		//	10	CGODL				// "CGODL"만 있을 경우 (optionally multiple O's)라서 1인것 같은데?
		//	10	CGOOOODL			// 여긴 왜 또 0인가?
		//	0	CKCEODLL
		//	0	CGOGODL
		//	?1	CKL					// 중간에 CRAZY Word가 없을 경우 0인가? 1인가? (여긴 optionally이라고 명시가 안되있어서 확인 필요)
		//	0	CKCZ
		//	0	GOGL
		//	0	CKCKCKCKCZLLLL
		//	0	CGOL
		//	0	CZL
		//	0	CZCZ
		//	0	CKCGOOOOODL
		// 정답 11001000000100000000
        String Input = "CZ CKCZL CKCKCZLL CGOGL CZ CKCZLL CKCKCZLL CGODL " +
                "CGOOOODL CKCEODLL CGOGODL CKL CKCZ GOGL CKCKCKCKCZLLLL CGOL CZL CZCZ " +
                "CKCGOOOOODL CKCZCGOODL";

        String[] words = Input.split(" ");

        StringBuilder result = new StringBuilder();

        for (String word : words) {
            result.append(isCrazy(word));
        }

        System.out.println(result.toString());
    }
}
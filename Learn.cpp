#include <iostream>
using namespace std;

int main(){
    char name[5];
    char word[5];
    cin >> name;
    cout << "i "<< word  << name << endl;
    if(word == "love" ){
         cout << "i love you too" << endl;
    }else{
        cout << "I hate you " << name << endl;
    }
    return 0;
}
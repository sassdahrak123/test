#include <iostream>
#include <cstdio>
#include <string.h>
using namespace std;

int main(){
    char name[5];
    string word;
    cin >> word;
    cin >> name;
    cout << "i "<< word  <<" "<< name << endl;
    if(word == "love" ){
         cout << "i love you too" << endl;
    }else{
        cout << "I hate you " << name << endl;
    }
    return 0;
}
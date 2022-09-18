#!/bin/bash

while getopts abcdeh OPCAO
do
    # Verifica o parâmetro armazenado em 'OPCAO'
    case $OPCAO in
        # Atribui uma ação.
        'a') opcao_A=1 ;;
	'b') opcao_B=1 ;;
        'c') opcao_C=1 ;;
        'd') opcao_D=1 ;;
        'e') opcao_E=1 ;;
        'e') opcao_H=1 ;;
    esac
done

[ $opcao_A ] && git status
[ $opcao_B ] && git add .
[ $opcao_C ] && git commit -m att
[ $opcao_D ] && git push
[ $opcao_E ] && git pull #https://github.com/Andre-SMedina/Controle_de_caixa
[ $opcao_H ] && echo "a: status, b: add, c: commit, d: push, e: pull"
exit 0

//
//  main.c
//  linked-list
//
//  Created by Scott Haselton on 11/24/13.

#include <stdio.h>
#include <stdlib.h>



struct node{
    int value;
    struct node *leftSubtree;
    struct node *rightSubtree;
} node;

struct node *generateNode();
void addNodeToGraph( struct node *, struct node *);
void printInOrder( struct node * );
void printPreOrder( struct node * );
void printPostOrder( struct node * );

int main (int argc, const char * argv[])
{   
    srand(time(NULL));
    struct node *newNode;
    struct node *rootNode;
    
    rootNode = generateNode();
    
    for( int i = 0; i < 10; i++ ){
        newNode = generateNode();
        addNodeToGraph( rootNode, newNode );
    }
    
    printf("root node value %d\n", rootNode->value);
    
    printf("in order\n");
    printInOrder(rootNode);
    printf("\n");
    
    printf("pre order\n");
    printPreOrder(rootNode);
    printf("\n");
    
    printf("post order\n");
    printPostOrder(rootNode);
    
    return 0;
}

void printInOrder( struct node *root ){
    if( NULL != root ){
        printInOrder(root->leftSubtree);
        printf("%d\t", root->value);
        printInOrder(root->rightSubtree);
    }
}
    

void printPreOrder( struct node *root ){
    if( NULL != root ){
        printf("%d\t", root->value);
        printInOrder(root->leftSubtree);
        printInOrder(root->rightSubtree);
    }
}


void printPostOrder( struct node *root ){
    if( NULL != root ){
        printInOrder(root->leftSubtree);
        printInOrder(root->rightSubtree);
        printf("%d\n", root->value);
    }
}

void addNodeToGraph( struct node *root, struct node *newNode ){
    //printf("new node added %d\n", newNode->value);
    if( root->value <= newNode->value ){
        if( NULL == root->rightSubtree ){
            root->rightSubtree = newNode;
        }else{
            addNodeToGraph(root->rightSubtree, newNode);
        }
    }else{
        if( NULL == root->leftSubtree ){
            root->leftSubtree = newNode;
        }else{
            addNodeToGraph(root->leftSubtree, newNode);
        }
    }
};

struct node *generateNode(){    
    struct node *newNode = (struct node *) malloc(sizeof(struct node));
    newNode->value = (rand() % 100) + 1;
    return newNode;
};

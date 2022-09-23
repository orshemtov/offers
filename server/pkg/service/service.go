package service

type Service[T any] interface {
	Get(id int) T
	GetAll() []T
	Create(T) T
	Update(id int, item T) T
	Delete(id int)
}
